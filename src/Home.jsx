const Home = () => {

    return (
        <div>
            <h1>Fitness Challenges App</h1>
    <h2>Problem Statement</h2>
    <p>Fitness Challenges App to Set and Track fitness challenges with Friends and Groups.</p>
    
    <h2>Overview of the App</h2>
    <p>This app enables users to embark on their fitness journey in a gamified manner, where they must complete daily workouts and quests in Real Life to level up in the Virtual Game.</p>
    <p>Each user is initially assigned a level based on their physical and mental status. The app features a robust progress tracking section that helps individuals monitor their fitness journey through goal setting and visual progress indicators.</p>
    <p>Completing daily challenges and maintaining consistency rewards users with XP, helping them level up and unlock achievements.</p>
    <p>The app also includes Combat games, leaderboards, social engagement features, and a penalty system to keep users motivated and accountable.</p>
    
    <h2>Features of the App</h2>
    <h3>1. Core Features</h3>
    <ul>
        <li><strong>User Profile & Levels:</strong> Users start at a level based on their physical & mental status.</li>
        <li><strong>Daily Challenges:</strong> Completing them increases XP; skipping leads to penalties.</li>
        <li><strong>Friend Challenges:</strong> Challenge friends to level up together.</li>
        <li><strong>Goal Tracking:</strong> Users set and track fitness goals.</li>
        <li><strong>Leaderboard:</strong> Compare progress with friends.</li>
        <li><strong>Streak System:</strong> Rewards for maintaining consistency.</li>
        <li><strong>Penalty System:</strong> Optional penalties for skipping workouts.</li>
    </ul>
    
    <h3>2. User Flow</h3>
    <h4>Onboarding</h4>
    <ul>
        <li>Getting user details</li>
        <li>Initial Fitness & Mental Status Assessment</li>
        <li>Assign Level based on the Assessment</li>
        <li>Explaining how the Level works and Tutorial on Challenges & Rewards</li>
        <li>Generating a Workout Plan</li>
    </ul>
    
    <h4>Home Screen</h4>
    <ul>
        <li>Current Level & XP Progress Bar</li>
        <li>Today's Challenge & Status (Completed/Pending)</li>
        <li>Friend Challenges (Accept/Decline)</li>
        <li>User customized tracker (Eg. Meditation, Coding, No fap streak, Sleep cycle, Calorie intake)</li>
    </ul>
    
    <h4>Challenges Section</h4>
    <ul>
        <li>Daily Challenge & Quest: Auto-assigned based on level</li>
        <li>Custom Challenges: Create & send to friends</li>
        <li>Battle: Group fitness challenge</li>
    </ul>
    
    <h4>Goal Tracking</h4>
    <ul>
        <li>Set & track short/long-term goals</li>
        <li>Weekly & Monthly progress reports</li>
        <li>Visual tracking (Graphs, Streak Badges)</li>
    </ul>
    
    <h4>Leaderboard & Social</h4>
    <ul>
        <li>Global & Friends-only leaderboards</li>
        <li>React to friend’s progress (claps, fire emoji, etc.)</li>
        <li>Invite friends via social media</li>
    </ul>
    
    <h4>Penalty & Reward System</h4>
    <ul>
        <li><strong>Penalty:</strong> Users can set their own penalties (donate money, reduce XP, extra challenge etc.) for missing a daily challenge for more than two days.</li>
        <li><strong>Reward:</strong> Earn XP, badges, and Streak badges by completing Daily Challenges and maintaining Consistency.</li>
    </ul>
    
    <h2>Tech Stack</h2>
    <h3>Frontend:</h3>
    <ul>
        <li>React.js</li>
    </ul>
    <h3>Backend:</h3>
    <ul>
        <li>Express.js</li>
        <li>Node.js</li>
    </ul>
    <h3>Database:</h3>
    <ul>
        <li>MongoDB</li>
    </ul>
    <h3>Hosting Platforms:</h3>
    <ul>
        <li>Frontend - Netlify or Vercel</li>
        <li>Backend - Heroku</li>
    </ul>
        </div>
    );
}

export default Home;