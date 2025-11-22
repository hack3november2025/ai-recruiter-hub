import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CVEvaluation = () => {
  const { toast } = useToast();
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleFileUpload = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setHasResults(true);
      toast({
        title: "CV Evaluated Successfully",
        description: "Analysis complete with detailed scoring.",
      });
    }, 2500);
  };

  const metrics = [
    { label: "Skills Match", score: 87, color: "bg-primary", icon: Award },
    { label: "Experience Relevance", score: 92, color: "bg-success", icon: Briefcase },
    { label: "Education Fit", score: 78, color: "bg-accent", icon: GraduationCap },
    { label: "Achievement Impact", score: 85, color: "bg-warning", icon: TrendingUp },
  ];

  const riskMetrics = [
    { label: "Employment Gaps", value: "2 months", status: "low" },
    { label: "Structure Quality", value: "Excellent", status: "good" },
    { label: "Keyword Density", value: "82%", status: "good" },
    { label: "AI Confidence", value: "94%", status: "good" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent">
              <FileText className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">CV Evaluation</h1>
              <p className="text-muted-foreground mt-1">
                AI-powered candidate assessment with objective scoring
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {!hasResults ? (
          <Card className="p-12 shadow-medium max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Upload Candidate CV
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Upload a PDF, DOC, or DOCX file to get instant AI-powered evaluation and scoring
              </p>

              <div className="border-2 border-dashed border-border rounded-lg p-12 mb-6 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center">
                  <FileText className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-foreground font-medium mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF, DOC, or DOCX (max 10MB)
                  </p>
                </div>
              </div>

              <Button 
                variant="gradient" 
                size="lg" 
                className="gap-2"
                onClick={handleFileUpload}
                disabled={isEvaluating}
              >
                {isEvaluating ? "Evaluating..." : "Upload & Evaluate"}
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Candidate Header */}
            <Card className="p-6 shadow-medium">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                    SJ
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Sarah Johnson</h2>
                    <p className="text-muted-foreground">Senior Frontend Engineer</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary">5+ years experience</Badge>
                      <Badge variant="secondary">Remote</Badge>
                      <Badge variant="secondary">Available immediately</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-primary">87%</div>
                  <p className="text-sm text-muted-foreground">Overall Fit Score</p>
                </div>
              </div>
            </Card>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <Card key={metric.label} className="p-6 shadow-soft">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${metric.color}/10`}>
                      <metric.icon className={`w-5 h-5 ${metric.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {metric.score}%
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-2">{metric.label}</p>
                  <Progress value={metric.score} className="h-2" />
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Detailed Analysis */}
              <Card className="lg:col-span-2 p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-6">Detailed Analysis</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">Skills Match</h4>
                      <Badge variant="secondary">87% match</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">React & TypeScript</span>
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">State Management</span>
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Performance Optimization</span>
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Next.js</span>
                        <AlertCircle className="w-4 h-4 text-warning" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">Experience Highlights</h4>
                      <Badge variant="secondary">92% relevance</Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        Led frontend architecture for high-traffic SaaS platform
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        Implemented design system used by 20+ developers
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        Mentored 5 junior developers, improving team velocity by 40%
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        Reduced page load time by 60% through optimization
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <Badge variant="secondary">78% fit</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      B.S. Computer Science, Stanford University (2018)
                    </p>
                  </div>
                </div>
              </Card>

              {/* Risk Assessment */}
              <Card className="p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-6">Risk Assessment</h3>
                
                <div className="space-y-4">
                  {riskMetrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {metric.label}
                        </span>
                        {metric.status === "good" ? (
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        ) : metric.status === "low" ? (
                          <CheckCircle2 className="w-4 h-4 text-warning" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-destructive" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-success mb-1">Strong Candidate</h4>
                      <p className="text-sm text-success/90">
                        High confidence recommendation for interview
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button variant="default" size="lg" className="w-full">
                    Schedule Interview
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Compare Candidates
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVEvaluation;
