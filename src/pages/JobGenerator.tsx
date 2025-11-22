import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Copy, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const JobGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      toast({
        title: "Job description generated!",
        description: "Your AI-powered job posting is ready.",
      });
    }, 2000);
  };

  const generatedContent = `Senior Frontend Engineer

We are seeking an experienced Senior Frontend Engineer to join our growing engineering team. This role is perfect for someone passionate about building exceptional user experiences and leading technical initiatives.

Key Responsibilities:
• Lead the development of modern, responsive web applications using React and TypeScript
• Architect scalable frontend solutions and establish best practices
• Mentor junior developers and conduct code reviews
• Collaborate with product and design teams to implement new features
• Optimize application performance and ensure cross-browser compatibility

Required Skills:
• 5+ years of professional frontend development experience
• Expert knowledge of React, TypeScript, and modern JavaScript
• Strong understanding of web performance optimization
• Experience with state management (Redux, Zustand, etc.)
• Proficiency in CSS and modern styling solutions

Preferred Skills:
• Experience with Next.js or similar frameworks
• Knowledge of testing frameworks (Jest, React Testing Library)
• Familiarity with CI/CD pipelines
• Experience with design systems

Benefits:
• Competitive salary range: $120,000 - $160,000
• Remote-first work environment
• Comprehensive health insurance
• Professional development budget
• Flexible working hours
• Equity options

Our company values diversity and is committed to creating an inclusive environment for all employees.`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-primary">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Job Generator</h1>
              <p className="text-muted-foreground mt-1">
                Create compelling job descriptions in seconds
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-2xl font-bold text-foreground mb-6">Job Details</h2>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="job-title">Job Title *</Label>
                <Input 
                  id="job-title"
                  placeholder="e.g., Senior Frontend Engineer"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department" className="mt-2">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="seniority">Seniority Level</Label>
                <Select>
                  <SelectTrigger id="seniority" className="mt-2">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="lead">Lead</SelectItem>
                    <SelectItem value="principal">Principal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location"
                  placeholder="e.g., Remote, San Francisco, etc."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="salary">Salary Range (optional)</Label>
                <Input 
                  id="salary"
                  placeholder="e.g., $100,000 - $150,000"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Brief Description *</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe the role, key responsibilities, and must-have skills..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="tone">Tone</Label>
                <Select defaultValue="professional">
                  <SelectTrigger id="tone" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual & Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="innovative">Innovative</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                variant="gradient" 
                size="lg" 
                className="w-full gap-2"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate Job Description
                  </>
                )}
              </Button>

              <Link to="/job/1" className="block">
                <Button variant="outline" size="lg" className="w-full gap-2 mt-3">
                  View Example Job
                </Button>
              </Link>
            </div>
          </Card>

          {/* Generated Output */}
          <Card className="p-8 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Generated Output</h2>
              {generated && (
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            {!generated ? (
              <div className="flex flex-col items-center justify-center h-[600px] text-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ready to generate
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Fill in the job details on the left and click generate to create your AI-powered job description
                </p>
              </div>
            ) : (
              <div className="prose prose-sm max-w-none">
                <div className="bg-muted/30 rounded-lg p-6 whitespace-pre-wrap font-body text-foreground">
                  {generatedContent}
                </div>

                <div className="mt-6 flex gap-3">
                  <Button variant="default" size="lg" className="flex-1">
                    Approve & Post
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Edit Draft
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobGenerator;
