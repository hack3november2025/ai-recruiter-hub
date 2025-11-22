import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Target,
  ArrowUpRight,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      label: "Active Jobs",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-primary",
    },
    {
      label: "Candidates Evaluated",
      value: "156",
      change: "+34%",
      trend: "up",
      icon: Users,
      color: "text-accent",
    },
    {
      label: "Avg. Match Score",
      value: "78%",
      change: "+5%",
      trend: "up",
      icon: Target,
      color: "text-success",
    },
    {
      label: "Active Searches",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Activity,
      color: "text-warning",
    },
  ];

  const recentActivities = [
    { action: "CV evaluated", candidate: "Sarah Johnson", score: 92, time: "5 min ago", link: "/cv-evaluation" },
    { action: "Job created", candidate: "Senior Frontend Engineer", score: null, time: "12 min ago", link: "/job/1" },
    { action: "CV evaluated", candidate: "Michael Chen", score: 85, time: "23 min ago", link: "/cv-evaluation" },
    { action: "Search completed", candidate: "React developers", score: null, time: "1 hour ago", link: "/candidate-search" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your recruitment pipeline
              </p>
            </div>
            <Link to="/job-generator">
              <Button variant="gradient" size="lg" className="gap-2">
                <FileText className="w-4 h-4" />
                Create Job Posting
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                    <span className="text-sm text-success font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View all
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <Link key={index} to={activity.link}>
                  <div className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{activity.candidate}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    {activity.score && (
                      <div className="mr-4">
                        <div className="px-3 py-1 rounded-full bg-success/10 text-success font-medium text-sm">
                          {activity.score}% match
                        </div>
                      </div>
                    )}
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-bold text-foreground mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/job-generator">
                <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                  <FileText className="w-5 h-5" />
                  Generate Job Description
                </Button>
              </Link>
              <Link to="/cv-evaluation">
                <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                  <Users className="w-5 h-5" />
                  Evaluate CV
                </Button>
              </Link>
              <Link to="/candidate-search">
                <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                  <Activity className="w-5 h-5" />
                  Search Candidates
                </Button>
              </Link>
            </div>

            <div className="mt-6 p-4 rounded-lg gradient-primary">
              <h3 className="text-white font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-white/90 text-sm mb-3">
                Get intelligent recommendations based on your hiring patterns
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                View Insights
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
