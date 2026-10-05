import { useEffect, useMemo, useState } from "react";
import { Shell, type RouteName } from "./components/Shell";
import { Onboarding } from "./components/Onboarding";
import { useProgress } from "./state/ProgressContext";
import { DashboardPage } from "./pages/DashboardPage";
import { LearnPage } from "./pages/LearnPage";
import { ReviewPage } from "./pages/ReviewPage";
import { PracticePage } from "./pages/PracticePage";
import { ExamPage } from "./pages/ExamPage";
import { MistakesPage } from "./pages/MistakesPage";
import { FormulasPage } from "./pages/FormulasPage";
import { LabsPage } from "./pages/LabsPage";
import { TrapsPage } from "./pages/TrapsPage";
import { StudyPlanPage } from "./pages/StudyPlanPage";
import { SourcesPage } from "./pages/SourcesPage";
import { GuidePage } from "./pages/GuidePage";
import { AccountPage } from "./pages/AccountPage";

const parseHash = () => {
  const raw = window.location.hash.replace(/^#\/?/, "") || "dashboard";
  const [path, query = ""] = raw.split("?");
  const valid: RouteName[] = ["dashboard", "learn", "review", "practice", "exam", "mistakes", "formulas", "labs", "traps", "plan", "guide", "account", "sources"];
  return { route: valid.includes(path as RouteName) ? path as RouteName : "dashboard", params: new URLSearchParams(query) };
};

export default function App() {
  const { progress, completeOnboarding } = useProgress();
  const [location, setLocation] = useState(parseHash);
  const [diagnosticMode, setDiagnosticMode] = useState(false);

  useEffect(() => {
    const update = () => setLocation(parseHash());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const navigate = (target: string) => {
    window.location.hash = `/${target}`;
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const page = useMemo(() => {
    const { route, params } = location;
    switch (route) {
      case "dashboard": return <DashboardPage navigate={navigate} />;
      case "learn": return <LearnPage initialLesson={params.get("lesson") ?? undefined} initialModule={params.get("module") ?? undefined} navigate={navigate} />;
      case "review": return <ReviewPage />;
      case "practice": return <PracticePage initialTopic={params.get("topic") ?? undefined} initialModule={params.get("module") ?? undefined} onlyMistakes={params.get("mistakes") === "1"} />;
      case "exam": return <ExamPage diagnostic={diagnosticMode} onDiagnosticComplete={completeOnboarding} navigate={navigate} />;
      case "mistakes": return <MistakesPage navigate={navigate} />;
      case "formulas": return <FormulasPage navigate={navigate} />;
      case "labs": return <LabsPage />;
      case "traps": return <TrapsPage />;
      case "plan": return <StudyPlanPage />;
      case "guide": return <GuidePage navigate={navigate} />;
      case "account": return <AccountPage />;
      case "sources": return <SourcesPage />;
    }
  }, [location, diagnosticMode, completeOnboarding]);

  if (!progress.onboardingComplete && !diagnosticMode) {
    return <Onboarding onStart={() => { completeOnboarding(); navigate("learn"); }} onDiagnostic={() => { setDiagnosticMode(true); navigate("exam"); }} />;
  }

  return <Shell route={location.route} navigate={(target) => { if (target !== "exam") setDiagnosticMode(false); navigate(target); }}>{page}</Shell>;
}
