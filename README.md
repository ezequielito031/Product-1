FitTrack
FitTrack helps me quickly choose a short, equipment-free exercise that I’m able to do from home so I don’t lose the day completely without exercise also helps me understand how to perform it, and record the time doing it, without creating an account or installing an app or watching a YouTube video.
Efren Lora CMP 464/343 Product 1 
Project background: FitTrack began as an Android application built with Kotlin and Jetpack Compose for a previous course. I am adapting the idea into a mobile-first web application using Next.js, React, and CSS. This version focuses on making the experience available through a browser and keeping a basic workout history between visits.
1. A few details about me.
I am a full-time computer science student at Lehman College and on the other hand I’m also a full-time employee at Baruch College. Between classes, work, assignments, and other responsibilities, I do not always have time for a gym session. My fiancé put it into this so there’s no way for me to resign. So sometimes I must exercise at home, I prefer short bodyweight activities that I can do at home without buying equipment or following a complicated routine.
I consider myself an intermediate exerciser that sometime lose track of progress and go back to the starting point. I am motivated to stay active, but let’s be honest getting started can be harder than the exercise itself, I have to decide what to do with my free time, is either doing my homework, rest or going to gym and on top of that I also waste time checking whether it matches my experience level, and make sure I understand the movements that’s why “FitTrack” creation born. 
The last 3 times this happened:
During this semester after clocking at 5:00 PM from my job then I need to run and get home so I can join your class or Bryan Murphy’s class and trust me after working all day and after taking classes the last thing that comes to my mid is going to the gym, I need to get dress and leave my house “nah”. So sometimes I just skip the gym and instead I use those minutes available to exercise at home and still have time to do homework and rest.
One thing that makes it harder for me to stay consistent with the gym is the transition from summer to fall. Going outside when it’s freezing cold or raining makes it even harder to stay motivated. That’s why working out at home sometimes feels like the best option, at least to maintain the progress you’ve already made. 

Often this issue happens because my fiancée’s schedule doesn’t always align with mine. After a long day of work and school, that can be another factor that makes it harder to find the motivation to make that final effort to go to the gym.

What it costs me:
Time: I spend a lot of time commuting and choosing an exercise on a typical occasion. That matters when my available exercise window is only less than 2 hours.
Money: The main cost may be lost time rather than money.
Energy: Making the decisions after a busy day, I put off exercising because commitment feels more difficult than it should.
Joy: Tracking everything and making sure you are really progressing makes it more fun tbh. 
2. Problem Statement
I need a faster way to choose a suitable exercise and remember what I completed because limited free time, uncertainty, and forgotten sessions make it difficult to maintain a consistent routine.
Five Whys:
Why do I sometimes delay or skip exercising? Because I spend too much of my available time deciding what to do, especially when I am tired or busy.
Why does choosing to make so much effort? Because I search through unrelated videos, workout suggestions, or memories of activities I have done before.
Why are those options difficult to use in the moment? Because I cannot easily compare them by type, difficulty, and the amount of time I have available.
Why does the same problem happen again later? Because I do not consistently keep the exercises I can do and my complete sessions in one convenient place.
Why have I not maintained a reliable record? Because my current process requires extra searching and separate notetaking, I often finish exercising without recording the activity.
Root cause: Choosing an appropriate exercise, extra time, and remembering completed activity are disconnected tasks. That extra effort makes an already short opportunity to exercise less useful.


Problem statement:
When I have a short break between classes, work, or homework and want to exercise at home,
I struggle to find an exercise appropriate for my ability and available time, understand the movement, and remember my complete sessions.								 											        This happens because my exercise options, instructions, and personal history are scattered across different places, making a simple activity require several separate steps.
Right now I look for videos or rely on memory and occasional notes, but those habits take time and leave me without a dependable record of my effort.
I'll know this is solved when: I can select an appropriate exercise and read its instructions within 60 seconds in at least 4 out of 5 test attempts, record the minutes I actually completed without a separate notes process, and accurately recall my session count and total minutes after returning to the same browser on a later day. 
3. Existing Solutions
What I use or tried	What it does well	Why it falls short for me
YouTube workout videos	Provides a wide variety of demonstrations and explanations, often for free	I can spend much of my short exercise window searching, comparing videos, or navigating distractions.
Notes or memory	Are familiar and require little setup	I must remember to record each activity myself, and a basic note does not automatically calculate my session count or minutes.
The gap: I need one low-friction experience that helps me choose a short exercise, follow clear instructions, and preserve a basic record of completed sessions.
4. Features & Benefits
Feature 	Benefit (how my life gets better)	MVP or Later?
Exercise catalog: Display the existing collection of 12 exercises across Strength, Cardio, Flexibility, and HIIT, including difficulty and recommended duration	I can compare realistic options quickly instead of starting a new search each time	MVP 
Exercise instructions: Present step-by-step “How to Perform” guidance for each listed exercise	I can understand the intended movement before beginning	MVP 
Session logging: Let me select an exercise and enter the number of minutes I completed	Recording the result becomes part of the same experience, rather than a separate task I am likely to forget	MVP 
Progress briefly: Show total completed sessions, total recorded minutes, and a recent activity history	I can see tangible evidence of my consistency without mentally reconstructing previous days	MVP 
Guided workout timer: Count down the suggested duration and help me time an active session	I would not need to switch to a separate clock or timer	Later
Weekly summaries and goals: Display recent-week totals and optional consistency goals	I could judge whether I am building a repeatable exercise habit	Later
5. Tech Stack
Front end
Surface: Mobile-first web application, usable from a modern browser on a phone or laptop.
Tools: Next.js 15, React 19, JSX/HTML, and plain CSS 
Why: I am most likely to want to exercise when I have a short break and whichever device is nearby. A responsive website removes the Android-only restriction and avoids an installation step. Next.js also matches the stack used in class, which keeps the implementation manageable.
Piece	Choice	Why
Server / API	Next.js route: GET /api/exercises, /api/exercises?category=cardio	Exposes the shared catalog through a read-only endpoint that another client could use in the future.
Exercise data	Existing code-based catalog in lib/exercises.js 	A small fixed library does not require a database or content-management system.
Session storage	Browser localStorage	Persists manually recorded entries across normal visits in the same.
Hosting / deploy	Vercel, with preview deployments as the intended workflow 	Fits Next.js and supports sharing a live project for feedback.

6. Open Questions
Should the main screen show all-time or weekly progress? All-time totals match the current MVP; weekly totals may better support consistency but should remain a later enhancement unless already implemented.
What counts as a session? Is one exercise with recorded minutes enough for my needs, or do I eventually want to combine several exercises into one workout? The MVP deliberately uses the first definition.
How useful are 12 exercises over time? After using the catalog for one or two weeks, do I repeat a few favorites or struggle to find enough variety? That observation should decide whether expanding it is worthwhile.

