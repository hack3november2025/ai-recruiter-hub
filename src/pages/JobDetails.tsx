import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ArrowLeft,
  Search,
  Filter,
  Download,
  Mail,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
  ExternalLink,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const [sortBy, setSortBy] = useState("match");
  const [filterSkills, setFilterSkills] = useState("");

  const jobDetails = {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    salary: "$120,000 - $160,000",
    postedDate: "2024-01-15",
    status: "Active",
    applicants: 156,
    description: `We are seeking an experienced Senior Frontend Engineer to join our growing engineering team. This role is perfect for someone passionate about building exceptional user experiences and leading technical initiatives.`,
    responsibilities: [
      "Lead the development of modern, responsive web applications using React and TypeScript",
      "Architect scalable frontend solutions and establish best practices",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with product and design teams to implement new features",
      "Optimize application performance and ensure cross-browser compatibility"
    ],
    requiredSkills: [
      "React", "TypeScript", "JavaScript", "HTML/CSS", "State Management"
    ],
    preferredSkills: [
      "Next.js", "Testing", "CI/CD", "Design Systems"
    ]
  };

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      match: 92,
      experience: "6 years",
      location: "San Francisco, CA",
      avatar: "SJ",
      skills: ["React", "TypeScript", "Next.js", "Testing"],
      status: "New",
      appliedDate: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      match: 87,
      experience: "5 years",
      location: "Remote",
      avatar: "MC",
      skills: ["React", "JavaScript", "CSS", "Redux"],
      status: "Reviewed",
      appliedDate: "3 days ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      match: 85,
      experience: "7 years",
      location: "New York, NY",
      avatar: "ER",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      status: "Interview Scheduled",
      appliedDate: "5 days ago"
    },
    {
      id: 4,
      name: "David Park",
      email: "david.p@email.com",
      match: 82,
      experience: "4 years",
      location: "Austin, TX",
      avatar: "DP",
      skills: ["React", "JavaScript", "Vue", "Testing"],
      status: "New",
      appliedDate: "1 week ago"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      match: 79,
      experience: "8 years",
      location: "Seattle, WA",
      avatar: "LA",
      skills: ["React", "TypeScript", "Angular", "CSS"],
      status: "Reviewed",
      appliedDate: "1 week ago"
    },
    {
      id: 6,
      name: "James Wilson",
      email: "james.w@email.com",
      match: 76,
      experience: "5 years",
      location: "Remote",
      avatar: "JW",
      skills: ["React", "JavaScript", "Redux", "GraphQL"],
      status: "New",
      appliedDate: "2 weeks ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-primary/10 text-primary";
      case "Reviewed":
        return "bg-warning/10 text-warning";
      case "Interview Scheduled":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getMatchColor = (match: number) => {
    if (match >= 85) return "text-success";
    if (match >= 70) return "text-primary";
    return "text-warning";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <Link to="/job-generator">
            <Button variant="ghost" size="sm" className="mb-4 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Jobs
            </Button>
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{jobDetails.title}</h1>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  {jobDetails.status}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {jobDetails.location}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {jobDetails.salary}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Posted {new Date(jobDetails.postedDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {jobDetails.applicants} applicants
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                View Public
              </Button>
              <Button variant="default" size="sm" className="gap-2">
                <Mail className="w-4 h-4" />
                Email Candidates
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Details */}
          <Card className="lg:col-span-1 p-6 shadow-soft h-fit">
            <h2 className="text-xl font-bold text-foreground mb-4">Job Details</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {jobDetails.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {jobDetails.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {jobDetails.requiredSkills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Preferred Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {jobDetails.preferredSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Application Rate</span>
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="font-medium text-foreground">+24</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </div>
          </Card>

          {/* Candidates List */}
          <Card className="lg:col-span-2 p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">
                Matching Candidates ({candidates.length})
              </h2>
            </div>

            {/* Filters */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or skills..."
                  className="pl-9"
                  value={filterSkills}
                  onChange={(e) => setFilterSkills(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">Best Match</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="experience">Experience</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Candidates Table */}
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Candidate</TableHead>
                    <TableHead>Match</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidates.map((candidate) => (
                    <TableRow key={candidate.id} className="hover:bg-muted/30">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-medium">
                            {candidate.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{candidate.name}</p>
                            <p className="text-sm text-muted-foreground">{candidate.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className={`text-lg font-bold ${getMatchColor(candidate.match)}`}>
                            {candidate.match}%
                          </div>
                          <Progress value={candidate.match} className="h-1 w-20 mt-1" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {candidate.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-foreground">{candidate.experience}</span>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(candidate.status)}>
                          {candidate.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link to="/cv-evaluation">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Stats Footer */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{candidates.filter(c => c.match >= 85).length}</div>
                <p className="text-sm text-muted-foreground">High Match (85%+)</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">{candidates.filter(c => c.status === "Interview Scheduled").length}</div>
                <p className="text-sm text-muted-foreground">Interviews Scheduled</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">{candidates.filter(c => c.status === "New").length}</div>
                <p className="text-sm text-muted-foreground">New Applicants</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
