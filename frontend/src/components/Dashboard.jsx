import AnalysisOverview from "./AnalysisOverview";
import SkillsAnalysis from "./SkillsAnalysis";
import InterviewQuestions from "./InterviewQuestions";
import EmptyDashboard from "./EmptyDashboard";

function Dashboard({ response }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "100%",
      }}
    >
      <h2>Analysis Dashboard</h2>

      {/* <AnalysisOverview />

      <SkillsAnalysis />

      <InterviewQuestions /> */}

{response ? (
  <>
    <AnalysisOverview response={response} />
    <SkillsAnalysis response={response} />
    <InterviewQuestions response={response} />
  </>
) : (
  <EmptyDashboard />
)}
    </div>
  );
}

export default Dashboard;









// import MatchScoreCard from "./MatchScoreCard";
// import CandidateLevelCard from "./CandidateLevelCard";
// import RecommendationCard from "./RecommendationCard";
// import StrengthCard from "./StrengthCard";
// import MissingSkillsCard from "./MissingSkillsCard";
// import SuggestionsCard from "./SuggestionsCard";
// import InterviewQuestions from "./InterviewQuestions";
// import AnalysisOverview from "./AnalysisOverview";
// import SkillsAnalysis from "./SkillsAnalysis";


// function Dashboard({ response }) {
//   return (
//     <div
//       style={{
//         background: "white",
//         padding: "20px",
//         borderRadius: "15px",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h2>Analysis Dashboard</h2>

// <div
//   style={{
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr",
//     gap: "20px",
//     marginBottom: "20px",
//   }}
// >
//  <AnalysisOverview />
  
// </div>

// <div
//   style={{
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr",
//     gap: "20px",
//     marginBottom: "20px",
//   }}
// >
//  <SkillsAnalysis />
  
// </div>


      
//     </div>
//   );
// }

// export default Dashboard;








// function Dashboard() {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-6 h-full">

//       <h2 className="text-2xl font-bold mb-4">
//         Analysis Dashboard
//       </h2>

//       <div className="border-2 border-dashed h-[500px] rounded-lg flex justify-center items-center">

//         <p className="text-gray-400">
//           Analysis Results Will Appear Here
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;