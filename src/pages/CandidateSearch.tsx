import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  User,
  Sparkles,
  Brain
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  candidates?: Array<{
    name: string;
    role: string;
    match: number;
    skills: string[];
  }>;
}

const CandidateSearch = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI recruitment assistant. Ask me anything about candidates in your database. I can help you find, compare, and analyze candidates based on skills, experience, location, and more.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "I found 5 candidates matching your criteria. Here are the top matches:",
        candidates: [
          {
            name: "Sarah Johnson",
            role: "Senior Frontend Engineer",
            match: 92,
            skills: ["React", "TypeScript", "Node.js", "Leadership"],
          },
          {
            name: "Michael Chen",
            role: "Frontend Developer",
            match: 87,
            skills: ["React", "JavaScript", "CSS", "Testing"],
          },
          {
            name: "Emily Rodriguez",
            role: "Full Stack Engineer",
            match: 85,
            skills: ["React", "Node.js", "PostgreSQL", "AWS"],
          },
        ],
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success">
              <Brain className="w-5 h-5 text-success-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Conversational Search</h1>
              <p className="text-muted-foreground mt-1">
                Find and analyze candidates using natural language
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        <Card className="shadow-medium h-[calc(100vh-250px)] flex flex-col">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    } rounded-2xl p-4`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    
                    {message.candidates && (
                      <div className="mt-4 space-y-3">
                        {message.candidates.map((candidate, idx) => (
                          <Card key={idx} className="p-4 bg-card hover:shadow-soft transition-shadow">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                  <User className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-foreground">
                                    {candidate.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {candidate.role}
                                  </p>
                                </div>
                              </div>
                              <Badge variant="secondary" className="bg-success/10 text-success">
                                {candidate.match}% match
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {candidate.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me about candidates... (e.g., 'Show me React developers with 5+ years experience')"
                className="flex-1"
              />
              <Button 
                onClick={handleSend} 
                variant="gradient"
                size="icon"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex gap-2 mt-3 overflow-x-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInput("Show me candidates with React experience")}
              >
                React developers
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInput("Compare Sarah and Michael")}
              >
                Compare candidates
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInput("Who has leadership experience?")}
              >
                Leadership skills
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CandidateSearch;
