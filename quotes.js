// Extensive quotes collection with categories
const quotes = [
    // Motivational Quotes
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivational" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "motivational" },
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson", category: "motivational" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "motivational" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "motivational" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "motivational" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James", category: "motivational" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett", category: "motivational" },
    { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", category: "motivational" },
    { text: "You are capable of more than you know.", author: "Gloria Steinem", category: "motivational" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "motivational" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "motivational" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll", category: "motivational" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine", category: "motivational" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", category: "motivational" },
    { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki", category: "motivational" },
    { text: "The harder you work, the luckier you get.", author: "Gary Player", category: "motivational" },
    { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "motivational" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar", category: "motivational" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "motivational" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier", category: "motivational" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", category: "motivational" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney", category: "motivational" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "motivational" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "motivational" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman", category: "motivational" },
    { text: "You don’t have to be perfect to be amazing.", author: "Unknown", category: "motivational" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh", category: "motivational" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "motivational" },
    { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth", category: "motivational" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", category: "motivational" },
    { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry", category: "motivational" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats", category: "motivational" },
    { text: "You will never plow a field if you only turn it over in your mind.", author: "Unknown", category: "motivational" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi", category: "motivational" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "motivational" },
    { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa", category: "motivational" },
    { text: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Unknown", category: "motivational" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra", category: "motivational" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill", category: "motivational" },
    { text: "Limit your 'always' and your 'nevers'.", author: "Unknown", category: "motivational" },
    { text: "Nothing will work unless you do.", author: "Maya Angelou", category: "motivational" },
    { text: "Don't limit your challenges. Challenge your limits.", author: "Jerry Dunn", category: "motivational" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "motivational" },
    { text: "The only way to fail is not to try.", author: "Unknown", category: "motivational" },
    { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "motivational" },
    { text: "Life is not about waiting for the storm to pass, it’s about learning how to dance in the rain.", author: "Vivian Greene", category: "motivational" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", category: "motivational" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt", category: "motivational" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky", category: "motivational" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis", category: "motivational" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein", category: "motivational" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "motivational" },
    { text: "You can’t go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis", category: "motivational" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso", category: "motivational" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein", category: "motivational" },
    { text: "Don't wait for the perfect moment. Take the moment and make it perfect.", author: "Zoey Sayward", category: "motivational" },
    { text: "Nothing is impossible. The word itself says 'I'm possible!'", author: "Audrey Hepburn", category: "motivational" },
    { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus", category: "motivational" },
    { text: "The harder the battle, the sweeter the victory.", author: "Les Brown", category: "motivational" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt", category: "motivational" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", category: "motivational" },
    { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce", category: "motivational" },
    { text: "You don’t have to be extraordinary to be great. You just need to take the first step.", author: "Unknown", category: "motivational" },
    { text: "The only thing standing between you and your goal is the story you keep telling yourself.", author: "Jordan Belfort", category: "motivational" },
    { text: "Take the risk or lose the chance.", author: "Unknown", category: "motivational" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Unknown", category: "motivational" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers", category: "motivational" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown", category: "motivational" },
    { text: "You are not a product of your circumstances. You are a product of your decisions.", author: "Stephen R. Covey", category: "motivational" },
    { text: "The best way to get things done is to simply begin.", author: "Unknown", category: "motivational" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown", category: "motivational" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke", category: "motivational" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs", category: "motivational" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon", category: "motivational" },
    { text: "It’s never too late to be what you might have been.", author: "George Eliot", category: "motivational" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "motivational" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou", category: "motivational" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "motivational" },
    { text: "Success is a journey, not a destination.", author: "Arthur Ashe", category: "motivational" },
    { text: "Great things never come from comfort zones.", author: "Neil Strauss", category: "motivational" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi", category: "motivational" },
    { text: "Don't be afraid to start over. It's a chance to rebuild what you want.", author: "Unknown", category: "motivational" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", category: "motivational" },
    { text: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson", category: "motivational" },
    { text: "The only way to fail is to quit.", author: "Unknown", category: "motivational" },
    
    // Love Quotes
    { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", category: "love" },
    { text: "The best thing to hold onto in life is each other.", category: "love" },
    { text: "To love and be loved is to feel the sun from both sides.", category: "love" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", category: "love" },
    { text: "Love is composed of a single soul inhabiting two bodies.", category: "love" },
    { text: "I am yours, don’t give myself back to me.", category: "love" },
    { text: "Where there is love, there is life.", category: "love" },
    { text: "I have waited for this moment for so long, and now that it’s here, I’ll never let you go.", category: "love" },
    { text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", category: "love" },
    { text: "The best feeling is when you look at the one you love and they’re already looking at you.", category: "love" },
    { text: "You are my today and all of my tomorrows.", category: "love" },
    { text: "Love is a friendship set to music.", category: "love" },
    { text: "I love you more than I have ever found a way to say to you.", category: "love" },
    { text: "To be your friend was all I ever wanted; to be your lover was all I ever dreamed.", category: "love" },
    { text: "Love is not about possession. Love is about appreciation.", category: "love" },
    { text: "I will love you even when I am old and gray, and you will still be my greatest love.", category: "love" },
    { text: "If I know what love is, it is because of you.", category: "love" },
    { text: "True love is not about finding the perfect person, but learning to see an imperfect person perfectly.", category: "love" },
    { text: "Every love story is beautiful, but ours is my favorite.", category: "love" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.", category: "love" },
    { text: "When I saw you, I fell in love, and you smiled because you knew.", category: "love" },
    { text: "I look at you and see the rest of my life in front of my eyes.", category: "love" },
    { text: "You are my greatest adventure.", category: "love" },
    { text: "Love is when you meet someone who tells you something new about yourself.", category: "love" },
    { text: "There is no remedy for love but to love more.", category: "love" },
    { text: "When I’m with you, I feel like I’m at home.", category: "love" },
    { text: "In you, I’ve found the love of my life and my closest, truest friend.", category: "love" },
    { text: "Love is not about finding someone to live with. It’s about finding someone you can’t imagine living without.", category: "love" },
    { text: "The heart has its reasons of which reason knows nothing.", category: "love" },
    { text: "You’re the one that I want to spend the rest of my life with.", category: "love" },
    { text: "I never want to stop making memories with you.", category: "love" },
    { text: "Love isn’t something you find. Love is something that finds you.", category: "love" },
    { text: "The best love is the one that makes you a better person, without changing you into someone other than yourself.", category: "love" },
    { text: "I could search my whole life through and through and never find another you.", category: "love" },
    { text: "You have bewitched me, body and soul, and I love, I love, I love you.", category: "love" },
    { text: "I may not be your first love, but I want to be your last.", category: "love" },
    { text: "Love is a two-way street constantly under construction.", category: "love" },
    { text: "My heart is, and always will be, yours.", category: "love" },
    { text: "Being in love with you makes every morning worth getting up for.", category: "love" },
    { text: "I am yours, don’t give myself back to me.", category: "love" },
    { text: "With you, I am home.", category: "love" },
    { text: "If I had a flower for every time I thought of you, I could walk through my garden forever.", category: "love" },
    { text: "You’re the missing piece to my puzzle.", category: "love" },
    { text: "I love you not only for what you are but for what I am when I am with you.", category: "love" },
    { text: "Love is the only reality, and it’s not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", category: "love" },
    { text: "I found my home and my heart in you.", category: "love" },
    { text: "I will always love you. Even if the sky falls, and the world turns dark, I will always love you.", category: "love" },
    { text: "You complete me.", category: "love" },
    { text: "Every time I see you, I fall in love all over again.", category: "love" },
    { text: "To love or have loved, that is enough. Ask nothing further.", category: "love" },
    { text: "I love you more than words can express.", category: "love" },
    { text: "You are my heart, my life, my one and only thought.", category: "love" },
    { text: "When I’m with you, I feel like I’m home.", category: "love" },
    { text: "You’re the one I want to grow old with.", category: "love" },
    { text: "I love you more than I ever thought was possible.", category: "love" },
    { text: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.", category: "love" },
    { text: "A loving heart is the truest wisdom.", category: "love" },
    { text: "You have my whole heart for my whole life.", category: "love" },
    { text: "Love is a friendship set on fire.", category: "love" },
    { text: "With every kiss, my heart belongs to you more and more.", category: "love" },
    { text: "I would rather spend one moment holding you than a lifetime knowing I never could.", category: "love" },
    { text: "When I am with you, the world disappears.", category: "love" },
    { text: "The moment I met you, I knew you were the one I had been searching for.", category: "love" },
    { text: "When I’m with you, I feel complete.", category: "love" },
    { text: "To love is to admire with the heart; to admire is to love with the mind.", category: "love" },
    { text: "Love is the greatest refreshment in life.", category: "love" },
    { text: "You are my sun, my moon, and all my stars.", category: "love" },
    { text: "Love is a beautiful thing, especially when you’re with someone who makes you feel this way.", category: "love" },
    { text: "You make me feel like I’m home, wherever I am.", category: "love" },
    { text: "The best thing in life is finding someone who knows all your flaws, mistakes, and weaknesses, and still thinks you’re amazing.", category: "love" },
    { text: "There’s no one else I’d rather be with than you.", category: "love" },
    { text: "You make me a better person just by being you.", category: "love" },
    { text: "To love you is a dream come true.", category: "love" },
    { text: "Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.", category: "love" },
    { text: "I love you because the entire universe conspired to help me find you.", category: "love" },
    { text: "Love is a choice you make from moment to moment.", category: "love" },
    { text: "Love is composed of a single soul inhabiting two bodies.", category: "love" },
    { text: "There is no remedy for love but to love more.", category: "love" },
    { text: "Love is when the other person’s happiness is more important than your own.", category: "love" },
    { text: "I will love you with all my heart, with all my soul, for all my life.", category: "love" },
    { text: "To be loved is to be chosen.", category: "love" },
    { text: "You are the one I’ve been waiting for.", category: "love" },
    { text: "In your smile, I see something more beautiful than stars.", category: "love" },
    { text: "You are the love of my life, and I’m never letting go.", category: "love" },
    { text: "I never want to stop making memories with you.", category: "love" },
    { text: "I loved you yesterday, I love you still, I always have, and I always will.", category: "love" },
    { text: "Love is a friendship that has caught fire.", category: "love" },
    { text: "When I’m with you, I don’t need anything else.", category: "love" },
    
    
    // Success Quotes
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "success" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", category: "success" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "success" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "success" },
    { text: "Opportunities don't happen, you create them.", author: "Chris Grosser", category: "success" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "success" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "success" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "success" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "success" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier", category: "success" },
    { text: "The secret to getting ahead is getting started.", author: "Mark Twain", category: "success" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", category: "success" },
    { text: "Your limitation—it’s only your imagination.", author: "Unknown", category: "success" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "success" },
    { text: "Great things never come from comfort zones.", author: "Anonymous", category: "success" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown", category: "success" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown", category: "success" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown", category: "success" },
    { text: "Dream bigger. Do bigger.", author: "Unknown", category: "success" },
    { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown", category: "success" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown", category: "success" },
    { text: "Little things make big days.", author: "Unknown", category: "success" },
    { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown", category: "success" },
    { text: "Don't wait for opportunity. Create it.", author: "Unknown", category: "success" },
    { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown", category: "success" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown", category: "success" },
    { text: "Dream it. Believe it. Build it.", author: "Unknown", category: "success" },
    { text: "Success is what happens after you have survived all your mistakes.", author: "Anonymous", category: "success" },
    { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean", category: "success" },
    { text: "Success is the progressive realization of a worthy goal or ideal.", author: "Earl Nightingale", category: "success" },
    { text: "Don’t limit your challenges. Challenge your limits.", author: "Anonymous", category: "success" },
    { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo", category: "success" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "success" },
    { text: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell", category: "success" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey", category: "success" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar", category: "success" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett", category: "success" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats", category: "success" },
    { text: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", author: "Orison Swett Marden", category: "success" },
    { text: "Success is the ability to go from one failure to another with no loss of enthusiasm.", author: "Winston Churchill", category: "success" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "success" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", category: "success" },
    { text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.", author: "Bill Gates", category: "success" },
    { text: "Success means doing the best we can with what we have.", author: "Zig Ziglar", category: "success" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett", category: "success" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis", category: "success" },
    { text: "Success consists of going from failure to failure without loss of enthusiasm.", author: "Winston Churchill", category: "success" },
    { text: "Success is how well you do what you do when no one else is looking.", author: "John Wooden", category: "success" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", category: "success" },
    { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo", category: "success" },
    { text: "Success is achieved and maintained by those who try and keep trying.", author: "W. Clement Stone", category: "success" },
    { text: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", author: "Orison Swett Marden", category: "success" },
    { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr.", category: "success" },
    { text: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell", category: "success" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier", category: "success" },
    { text: "Success is about creating value.", author: "Candice Carpenter", category: "success" },
    { text: "Success is not about what you have, but what you give.", author: "Oprah Winfrey", category: "success" },
    { text: "Success is the progressive realization of a worthy ideal.", author: "Earl Nightingale", category: "success" },
    { text: "Success is not just about making money, it’s about making a difference.", author: "Unknown", category: "success" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton", category: "success" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett", category: "success" },
    { text: "Success is the ability to go from one failure to another with no loss of enthusiasm.", author: "Winston Churchill", category: "success" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", category: "success" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", category: "success" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "success" },
    { text: "Success is how well you do what you do when no one else is looking.", author: "John Wooden", category: "success" },
    { text: "Success is achieved and maintained by those who try and keep trying.", author: "W. Clement Stone", category: "success" },
    { text: "Success is about creating value.", author: "Candice Carpenter", category: "success" },
    { text: "Success is not just about making money, it’s about making a difference.", author: "Unknown", category: "success" },
    { text: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell", category: "success" },
    { text: "Success is not about what you have, but who you are.", author: "Bo Bennett", category: "success" },
    { text: "Success means doing the best we can with what we have.", author: "Zig Ziglar", category: "success" },

    // Wisdom Quotes
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "wisdom" },
    { text: "Knowing others is intelligence; knowing yourself is true wisdom.", author: "Lao Tzu", category: "wisdom" },
    { text: "Wisdom begins in wonder.", author: "Socrates", category: "wisdom" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", category: "wisdom" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "wisdom" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha", category: "wisdom" },
    { text: "It is not length of life, but depth of life.", author: "Ralph Waldo Emerson", category: "wisdom" },
    { text: "Time is what we want most, but what we use worst.", author: "William Penn", category: "wisdom" },
    { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "Andre Gide", category: "wisdom" },
    { text: "Life isn’t about finding yourself. It’s about creating yourself.", author: "George Bernard Shaw", category: "wisdom" },
    { text: "The unexamined life is not worth living.", author: "Socrates", category: "wisdom" },
    { text: "We do not remember days; we remember moments.", author: "Cesare Pavese", category: "wisdom" },
    { text: "The greatest wealth is to live content with little.", author: "Plato", category: "wisdom" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson", category: "wisdom" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle", category: "wisdom" },
    { text: "The mind is everything. What you think you become.", author: "Buddha", category: "wisdom" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "wisdom" },
    { text: "It is not what happens to you, but how you react to it that matters.", author: "Epictetus", category: "wisdom" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", category: "wisdom" },
    { text: "An unexamined life is not worth living.", author: "Socrates", category: "wisdom" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "wisdom" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", category: "wisdom" },
    { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln", category: "wisdom" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi", category: "wisdom" },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr.", category: "wisdom" },
    { text: "Knowing others is intelligence; knowing yourself is true wisdom.", author: "Lao Tzu", category: "wisdom" },
    { text: "A wise man learns more from his enemies than a fool from his friends.", author: "Baltasar Gracián", category: "wisdom" },
    { text: "Patience is a virtue.", author: "Proverb", category: "wisdom" },
    { text: "There is no remedy for love but to love more.", author: "Henry David Thoreau", category: "wisdom" },
    { text: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson", category: "wisdom" },
    { text: "The best way out is always through.", author: "Robert Frost", category: "wisdom" },
    { text: "Do not be wise in words, be wise in deeds.", author: "Jewish Proverb", category: "wisdom" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", category: "wisdom" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon", category: "wisdom" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien", category: "wisdom" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "wisdom" },
    { text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb", category: "wisdom" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein", category: "wisdom" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", category: "wisdom" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr.", category: "wisdom" },
    { text: "Don’t cry because it’s over, smile because it happened.", author: "Dr. Seuss", category: "wisdom" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "wisdom" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll", category: "wisdom" },
    { text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", author: "Marie Curie", category: "wisdom" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela", category: "wisdom" },
    { text: "The mind is everything. What you think you become.", author: "Buddha", category: "wisdom" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden", category: "wisdom" },
    { text: "If you can’t explain it simply, you don’t understand it well enough.", author: "Albert Einstein", category: "wisdom" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll", category: "wisdom" },
    { text: "Knowing others is intelligence; knowing yourself is true wisdom.", author: "Lao Tzu", category: "wisdom" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", category: "wisdom" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso", category: "wisdom" },
    { text: "The only way to deal with this life meaningfully is to find one's passion.", author: "Vincent van Gogh", category: "wisdom" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost", category: "wisdom" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", category: "wisdom" },
    { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi", category: "wisdom" },
    { text: "We do not remember days; we remember moments.", author: "Cesare Pavese", category: "wisdom" },
    { text: "The more I read, the more I acquire, the more certain I am that I know nothing.", author: "Voltaire", category: "wisdom" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", category: "wisdom" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "wisdom" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson", category: "wisdom" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey", category: "wisdom" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "wisdom" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", category: "wisdom" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr.", category: "wisdom" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", category: "wisdom" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "wisdom" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", category: "wisdom" },
    { text: "Time flies over us but leaves its shadow behind.", author: "Nathaniel Hawthorne", category: "wisdom" },

    // Humor Quotes
    { text: "I used to think I was indecisive, but now I’m not too sure." , category: "humor" },
    { text: "A day without laughter is a day wasted." , category: "humor" },
    { text: "Behind every great man is a woman rolling her eyes." , category: "humor" },
    { text: "I’m writing a book. I’ve got the page numbers done." , category: "humor" },
    { text: "I am on a seafood diet. I see food and I eat it." , category: "humor" },
    { text: "Life is short. Smile while you still have teeth." , category: "humor" },
    { text: "I told my wife she was drawing her eyebrows too high. She looked surprised." , category: "humor" },
    { text: "Why don’t skeletons fight each other? They don’t have the guts." , category: "humor" },
    { text: "I’m not arguing, I’m just explaining why I’m right." , category: "humor" },
    { text: "My wallet is like an onion. When I open it, it makes me cry." , category: "humor" },
    { text: "If you think nobody cares if you’re alive, try missing a couple of payments." , category: "humor" },
    { text: "The road to success is dotted with many tempting parking spaces." , category: "humor" },
    { text: "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning." , category: "humor" },
    { text: "I’m on a whiskey diet. I’ve lost three days already." , category: "humor" },
    { text: "You don’t have to be crazy to be my friend, but it helps." , category: "humor" },
    { text: "I’m not procrastinating. I’m doing side quests." , category: "humor" },
    { text: "If at first you don’t succeed, then skydiving is not for you." , category: "humor" },
    { text: "The early bird might get the worm, but the second mouse gets the cheese." , category: "humor" },
    { text: "I’m not arguing, I’m just passionately expressing my point of view." , category: "humor" },
    { text: "I used to play piano by ear, but now I use my hands." , category: "humor" },
    { text: "I put my phone on airplane mode, but it’s not flying." , category: "humor" },
    { text: "I don’t suffer from insanity, I enjoy every minute of it." , category: "humor" },
    { text: "I'm not a complete idiot; some parts are missing." , category: "humor" },
    { text: "I have a memory like an elephant. I remember everything, except the elephant." , category: "humor" },
    { text: "The only exercise I get is running late." , category: "humor" },
    { text: "My favorite childhood memory is not paying bills." , category: "humor" },
    { text: "I am not lazy, I am on energy-saving mode." , category: "humor" },
    { text: "I can’t believe I got fired from the calendar factory. All I did was take a day off." , category: "humor" },
    { text: "If we shouldn’t eat at night, why is there a light in the fridge?" , category: "humor" },
    { text: "I have a condition that prevents me from going on a diet. It’s called being hungry." , category: "humor" },
    { text: "I’m trying to lose weight, but it’s not working because I’m in a committed relationship with food." , category: "humor" },
    { text: "Why don’t some couples go to the gym? Because some relationships don’t work out." , category: "humor" },
    { text: "If you think you are too small to make a difference, try sleeping with a mosquito." , category: "humor" },
    { text: "I have a lot of growing up to do. I realized that the other day inside my fort." , category: "humor" },
    { text: "The only time to be positive you’re in the right path is when you’re on the edge." , category: "humor" },
    { text: "I’m not lazy, I’m just in my energy-saving mode." , category: "humor" },
    { text: "I couldn’t figure out why I was sleeping so much until I realized I’m a professional napper." , category: "humor" },
    { text: "Sometimes I pretend to be normal, but it gets boring, so I go back to being me." , category: "humor" },
    { text: "If you don’t know what you want, you’ll never know when you get it." , category: "humor" },
    { text: "I don’t always make the right decisions, but when I do, I’m shocked." , category: "humor" },
    { text: "I’m not short. I’m concentrated awesome." , category: "humor" },
    { text: "I always arrive late at the office, but I make up for it by leaving early." , category: "humor" },
    { text: "I’m trying to lose weight, but it’s not working because I’m in a committed relationship with food." , category: "humor" },
    { text: "I’m no longer the sharpest tool in the shed, but I’m still the most entertaining." , category: "humor" },
    { text: "I like my coffee like I like my mornings: dark and full of potential." , category: "humor" },
    { text: "I’m so good at sleeping, I can do it with my eyes closed." , category: "humor" },
    { text: "It’s not that I’m afraid of commitment, I’m afraid of running out of snacks." , category: "humor" },
    { text: "I can’t trust people who don’t like dogs, but I can definitely trust dogs who don’t like people." , category: "humor" },
    { text: "The problem with trouble is that it starts out as fun." , category: "humor" },
    { text: "I’m not arguing, I’m just explaining why I’m right." , category: "humor" },
    { text: "Do you ever feel like your life is a sitcom and you’re the only one without a laugh track?" , category: "humor" },
    { text: "You know you’re texting too much when you say ‘lol’ in real life, instead of actually laughing." , category: "humor" },
    { text: "The first five days after the weekend are always the hardest." , category: "humor" },
    { text: "Life is short, and so am I." , category: "humor" },
    { text: "I have a black belt in keeping things to myself." , category: "humor" },
    { text: "I wish I were a little bit taller, I wish I were a baller." , category: "humor" },
    { text: "I need six months of vacation, twice a year." , category: "humor" },
    { text: "I’m going to stand outside, so if anyone asks, I’m outstanding." , category: "humor" },
    { text: "The only thing I’m committed to is my bed." , category: "humor" },
    { text: "I’ve reached an age where my brain went from ‘You probably shouldn’t say that’ to ‘What the hell, let’s see what happens’." , category: "humor" },
    { text: "I used to be a people person, but people ruined that for me." , category: "humor" },
    { text: "If you think nobody cares if you’re alive, try missing a couple of payments." , category: "humor" },
    { text: "I’m not sure how many problems I have because math is one of them." , category: "humor" },
    { text: "You know you’re getting old when the candles cost more than the cake." , category: "humor" },
    { text: "I’m in shape. Round is a shape, right?" , category: "humor" },
    { text: "I didn’t fall, I’m just spending some quality time with the floor." , category: "humor" },
    { text: "You can’t have everything... where would you put it?" , category: "humor" },
    { text: "When nothing goes right, go left." , category: "humor" },
    { text: "I always wonder why birds stay in the same place when they can fly anywhere on earth. Then I ask myself the same question." , category: "humor" },
    { text: "I told my wife she was drawing her eyebrows too high. She looked surprised." , category: "humor" },
    { text: "I’m not sure how many problems I have because math is one of them." , category: "humor" },
    { text: "If you think nothing is impossible, try slamming a revolving door." , category: "humor" },
    { text: "You can’t make everyone happy. You’re not a jar of Nutella." , category: "humor" },
    { text: "I have a condition that prevents me from going on a diet. It’s called being hungry." , category: "humor" },
    { text: "Sometimes I pretend to be normal, but it gets boring, so I go back to being me." , category: "humor" },
    { text: "I’m not lazy. I’m on energy-saving mode." , category: "humor" },
    { text: "I don’t suffer from insanity, I enjoy every minute of it." , category: "humor" },
    { text: "I’m trying to lose weight, but I’m in a committed relationship with food." , category: "humor" },
    { text: "I’m not arguing, I’m just explaining why I’m right." , category: "humor" },
    { text: "I put my phone on airplane mode, but it’s not flying." , category: "humor" },

    // Sad Quotes
    { text: "Sometimes, the people you want the most are the ones you can’t have.", category: "sad" },
    { text: "The hardest part of moving forward is not looking back.", category: "sad" },
    { text: "It’s not the goodbye that hurts, but the flashbacks that follow.", category: "sad" },
    { text: "I wish I could go back to a time when I didn’t know you.", category: "sad" },
    { text: "You can’t always control who walks into your life, but you can control which window you throw them out of.", category: "sad" },
    { text: "I’m not okay, but I’m trying to be.", category: "sad" },
    { text: "Sometimes, silence is the loudest cry.", category: "sad" },
    { text: "I miss the old days when everything was simpler and people actually cared.", category: "sad" },
    { text: "It’s hard to forget someone who gave you so much to remember.", category: "sad" },
    { text: "The worst kind of sad is not being able to explain why.", category: "sad" },
    { text: "No one deserves your tears, but whoever deserves them will never make you cry.", category: "sad" },
    { text: "It’s hard to move on when you’re still in love with someone who doesn’t feel the same.", category: "sad" },
    { text: "Sometimes, the person you’d take a bullet for is the one behind the trigger.", category: "sad" },
    { text: "The pain of parting is nothing to the joy of meeting again.", category: "sad" },
    { text: "I wish I could stop thinking about you, but I can’t.", category: "sad" },
    { text: "The more you care, the more you have to lose.", category: "sad" },
    { text: "I wish I could turn back time to when things were good.", category: "sad" },
    { text: "Not everything is meant to last forever, and that’s what makes it so painful.", category: "sad" },
    { text: "Some people are meant to stay in your heart, but not in your life.", category: "sad" },
    { text: "One day, you’ll meet someone who will make you forget the one who hurt you.", category: "sad" },
    { text: "It's not the end, but the beginning of a painful journey.", category: "sad" },
    { text: "There’s a difference between loving someone and letting them go.", category: "sad" },
    { text: "You don’t realize how much you care for someone until they’re gone.", category: "sad" },
    { text: "Sometimes, the right person for you is the one you let go.", category: "sad" },
    { text: "People leave because they’re meant to, and that’s the sad truth.", category: "sad" },
    { text: "The hardest thing about losing someone is learning how to live without them.", category: "sad" },
    { text: "I’ll never forget you, but I’ll learn how to live without you.", category: "sad" },
    { text: "The worst part of love is losing it.", category: "sad" },
    { text: "Time doesn’t heal all wounds. Some scars remain forever.", category: "sad" },
    { text: "Sometimes you have to let go, even if it hurts.", category: "sad" },
    { text: "Not all scars show, not all wounds heal, and sometimes you can’t always tell who’s hurting.", category: "sad" },
    { text: "The hardest goodbyes are the ones that are never said, but felt.", category: "sad" },
    { text: "Loving someone who doesn’t love you back is the saddest thing in the world.", category: "sad" },
    { text: "You can’t always get what you want, and sometimes that’s the hardest lesson to learn.", category: "sad" },
    { text: "The pain of missing someone is a never-ending ache in your heart.", category: "sad" },
    { text: "I loved you, but I didn’t love myself enough to let you go.", category: "sad" },
    { text: "They say time heals, but sometimes it just teaches you to live with the pain.", category: "sad" },
    { text: "I wish I could just stop feeling this way, but I don’t know how.", category: "sad" },
    { text: "Some people come into your life, and others go, but the ones that stay are the ones that truly matter.", category: "sad" },
    { text: "The most painful goodbyes are the ones that are never said.", category: "sad" },
    { text: "The worst feeling is not being able to fix what’s broken.", category: "sad" },
    { text: "Every time I think I’m over you, I remember something that makes me miss you more.", category: "sad" },
    { text: "Some things are never meant to be, and that’s what hurts the most.", category: "sad" },
    { text: "It’s hard to be strong when all you want to do is cry.", category: "sad" },
    { text: "I keep telling myself to let go, but my heart refuses to listen.", category: "sad" },
    { text: "It hurts when you realize that no matter how much you care, some people will never care back.", category: "sad" },
    { text: "Sometimes, letting go is the hardest thing you’ll ever do.", category: "sad" },
    { text: "I can’t change the past, but I can’t stop thinking about it either.", category: "sad" },
    { text: "Every smile hides a thousand tears, and every laugh hides a broken heart.", category: "sad" },
    { text: "When you miss someone, you never realize how much you miss them until they’re not around.", category: "sad" },
    { text: "There’s nothing more painful than watching someone you love walk away.", category: "sad" },
    { text: "I thought I was over you, but then I realized I was just hiding the pain.", category: "sad" },
    { text: "The worst thing about being alone is that you can’t escape your thoughts.", category: "sad" },
    { text: "Sometimes, it feels like the world is against you, and all you can do is keep going.", category: "sad" },
    { text: "It’s hard to move forward when everything keeps reminding you of the past.", category: "sad" },
    { text: "The hardest thing to do is to forgive someone who has hurt you deeply.", category: "sad" },
    { text: "I never realized how much I depended on you until you were gone.", category: "sad" },
    { text: "No matter how much I try to let go, my heart won’t stop holding on.", category: "sad" },
    { text: "It hurts to see you happy without me, but I’d never wish you misery.", category: "sad" },
    { text: "Sometimes, the best way to heal is to let go of the people who hurt you.", category: "sad" },
    { text: "It’s hard to smile when you’re carrying the weight of the world on your shoulders.", category: "sad" },
    { text: "Some things are never meant to be, and sometimes that’s the hardest part to accept.", category: "sad" },
    { text: "The pain fades, but the scars remain forever.", category: "sad" },
    { text: "The hardest goodbyes are the ones that are left unsaid.", category: "sad" },
    { text: "Every time I think I’m okay, I realize I’m still hurting.", category: "sad" },
    { text: "Sometimes, the heart has to break before it can heal.", category: "sad" },
    { text: "I thought I was over you, but I still miss you more than I can express.", category: "sad" },
    { text: "It’s funny how the people you never wanted to let go of are the ones you have to.", category: "sad" },
    { text: "The worst feeling is loving someone who doesn’t love you back.", category: "sad" },
    { text: "I wish I could erase you from my memory, but that’s not how life works.", category: "sad" },
    { text: "It hurts when you realize that no matter how much you care, some people won’t ever understand.", category: "sad" },
    { text: "Sometimes, the only thing left to do is cry it out.", category: "sad" },
    { text: "You can’t change the past, but it’s hard to forget what it’s done to you.", category: "sad" },
    { text: "Not everyone you lose is a loss." , category: "sad" }
];


// DOM Elements
const startScreen = document.querySelector('.start-screen');
const mainApp = document.querySelector('.main-app');
const startBtn = document.getElementById('start-btn');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteCategory = document.getElementById('quote-category');
const newQuoteBtn = document.getElementById('new-quote-btn');
const copyQuoteBtn = document.getElementById('copy-quote-btn');
const favoriteQuoteBtn = document.getElementById('favorite-quote-btn');
const favoritesModal = document.getElementById('favorites-modal');
const favoritesModalBtn = document.getElementById('favorites-modal-btn');
const closeModalBtn = document.querySelector('.close-modal');
const favoritesList = document.getElementById('favorites-list');
const clearFavoritesBtn = document.getElementById('clear-favorites-btn');
const notification = document.getElementById('notification');
const categoryButtons = document.querySelectorAll('.category-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeModal = document.getElementById('theme-modal');
const closeThemeModal = themeModal.querySelector('.close-modal');
const themeOptions = document.querySelectorAll('.theme-option');

let currentQuote = null;
let currentCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

// Start Screen Interaction
startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    mainApp.classList.remove('hidden');
});

favoritesModalBtn.addEventListener('click', () => {
    updateFavoritesList();
    favoritesModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    favoritesModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === favoritesModal) {
        favoritesModal.style.display = 'none';
    }
});

// Clear All Favorites
clearFavoritesBtn.addEventListener('click', () => {
    favorites = [];
    localStorage.removeItem('favoriteQuotes');
    updateFavoritesList();
    showNotification('All favorites cleared');
});

// Category Filtering
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Set current category
        currentCategory = button.dataset.category;
        getNewQuote();
    });
});

// Function to get a new quote
function getNewQuote() {
    let filteredQuotes = currentCategory === 'all' 
        ? quotes 
        : quotes.filter(quote => quote.category === currentCategory);
    
    if (filteredQuotes.length === 0) {
        quoteText.textContent = "No quotes in this category.";
        quoteAuthor.textContent = "";
        quoteCategory.textContent = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    currentQuote = filteredQuotes[randomIndex];

    // Animate quote appearance
    quoteText.style.opacity = 0;
    setTimeout(() => {
        quoteText.textContent = `"${currentQuote.text}"`;
        quoteText.style.opacity = 1;
    }, 300);

    quoteCategory.textContent = `Category: ${currentQuote.category.charAt(0).toUpperCase() + currentQuote.category.slice(1)}`;
    
    // Reset favorite button
    favoriteQuoteBtn.querySelector('i').classList.remove('fas', 'active');
    favoriteQuoteBtn.querySelector('i').classList.add('far');
}

// Copy Quote Functionality
function copyQuote() {
    if (!currentQuote) return;
    
    const fullQuote = `${currentQuote.text} (${currentQuote.category} quote)`;
    
    navigator.clipboard.writeText(fullQuote).then(() => {
        showNotification('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy quote: ', err);
    });
}

// Favorite Quote Functionality
function toggleFavoriteQuote() {
    if (!currentQuote) return;

    const heartIcon = favoriteQuoteBtn.querySelector('i');
    const isFavorite = favorites.some(fav => fav.text === currentQuote.text);

    if (isFavorite) {
        // Remove from favorites
        favorites = favorites.filter(fav => fav.text !== currentQuote.text);
        heartIcon.classList.remove('fas', 'active');
        heartIcon.classList.add('far');
        showNotification('Removed from favorites');
    } else {
        // Add to favorites
        favorites.push(currentQuote);
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas', 'active');
        showNotification('Added to favorites');
    }

    // Update local storage
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
    
    // Update favorites list
    updateFavoritesList();
}

// Update Favorites List
function updateFavoritesList() {
    favoritesList.innerHTML = '';
    favorites.forEach((quote, index) => {
        const quoteEl = document.createElement('div');
        quoteEl.classList.add('favorite-quote');
        quoteEl.innerHTML = `
            <span class="remove-favorite" data-index="${index}">
                <i class="fas fa-trash"></i>
            </span>
            <p>"${quote.text}"</p>
            <span class="quote-category">${quote.category}</span>
        `;
        favoritesList.appendChild(quoteEl);
    });

    // Add event listeners to remove individual favorites
    document.querySelectorAll('.remove-favorite').forEach(removeBtn => {
        removeBtn.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;
            favorites.splice(index, 1);
            localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
            updateFavoritesList();
            showNotification('Quote removed from favorites');
        });
    });
}

// Show Notification
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Event Listeners
newQuoteBtn.addEventListener('click', getNewQuote);
copyQuoteBtn.addEventListener('click', copyQuote);
favoriteQuoteBtn.addEventListener('click', toggleFavoriteQuote);

// Open theme modal
themeToggleBtn.addEventListener('click', () => {
    themeModal.style.display = 'flex'; // Use flex to center the modal
});

// Close theme modal
closeThemeModal.addEventListener('click', () => {
    themeModal.style.display = 'none';
});

// Handle theme selection
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedTheme = option.dataset.theme;
        
        // Remove all existing theme classes
        document.body.classList.remove(
            'dark-theme', 
            'light-theme', 
            'nature-theme', 
            'minimalistic-theme'
        );
        
        // Add selected theme class if not default
        if (selectedTheme !== 'default') {
            document.body.classList.add(`${selectedTheme}-theme`);
        }

        // Save theme preference
        localStorage.setItem('preferred-theme', selectedTheme);
        
        // Close modal
        themeModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === themeModal) {
        themeModal.style.display = 'none';
    }
});

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme && savedTheme !== 'default') {
        document.body.classList.add(`${savedTheme}-theme`);
    }
});

// Initial setup
getNewQuote();
updateFavoritesList();

// AI Quote Generator functionality
const aiPromptInput = document.getElementById('ai-prompt');
const generateAiQuoteBtn = document.getElementById('generate-ai-quote');
const aiQuoteText = document.getElementById('ai-quote-text');
const aiGeneratedQuote = document.getElementById('ai-generated-quote');
const aiLoading = document.getElementById('ai-loading');

// Function to generate AI quote using OpenAI
async function generateAIQuote(prompt) {
    const response = await fetch('/api/generate-quote', {
        method: 'POST',  // Ensure this is POST
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),  // Send the prompt in the body
    });

    if (!response.ok) {
        throw new Error('Failed to generate quote');
    }

    const data = await response.json();
    return data.quote;
}

generateAiQuoteBtn.addEventListener('click', async () => {
    const prompt = aiPromptInput.value.trim();
    if (!prompt) {
        showNotification('Please enter a prompt first');
        return;
    }

    // Show loading state
    aiQuoteText.classList.add('hidden');
    aiLoading.classList.remove('hidden');
    
    try {
        const generatedQuote = await generateAIQuote(prompt);
        aiGeneratedQuote.textContent = `"${generatedQuote}"`;
    } catch (error) {
        console.error('Error generating quote:', error);
        aiGeneratedQuote.textContent = "Sorry, I couldn't generate a quote right now. Please try again.";
        showNotification('Failed to generate quote');
    } finally {
        aiLoading.classList.add('hidden');
        aiQuoteText.classList.remove('hidden');
    }
});
        
        // Add option to save AI-generated quote
        const saveQuoteBtn = document.createElement('button');
        saveQuoteBtn.textContent = 'Save Quote';
        saveQuoteBtn.classList.add('save-quote-btn');
        saveQuoteBtn.onclick = () => {
            quotes.push({
                text: generatedQuote,
                category: 'ai-generated'
            });
            showNotification('AI quote saved to collection!');
        };
        
        aiGeneratedQuote.appendChild(document.createElement('br'));
        aiGeneratedQuote.appendChild(saveQuoteBtn);

// Quiz Modal Functionality
const quizModal = document.getElementById('quiz-modal');
const quizQuestionEl = document.getElementById('quiz-question');
const quizOptionsEl = document.getElementById('quiz-options');
const nextQuestionBtn = document.getElementById('next-question');
const closeQuizModalBtn = quizModal.querySelector('.close-modal');
const quizScoreEl = document.getElementById('quiz-score');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    { question: "Who said 'The only limit to our realization of tomorrow is our doubts of today'?", options: ["Franklin D. Roosevelt", "Albert Einstein", "Winston Churchill", "Mark Twain"], answer: "Franklin D. Roosevelt" },
    { question: "Who is the author of 'The future belongs to those who believe in the beauty of their dreams'?", options: ["Eleanor Roosevelt", "Helen Keller", "Maya Angelou", "Virginia Woolf"], answer: "Eleanor Roosevelt" },
    // Add more questions here
];

function openQuizModal() {
    quizModal.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function closeQuizModal() {
    quizModal.classList.add('hidden');
    quizResult.classList.add('hidden');
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizQuestionEl.textContent = currentQuestion.question;
    quizOptionsEl.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionEl = document.createElement('button');
        optionEl.classList.add('quiz-option');
        optionEl.textContent = option;
        optionEl.onclick = () => selectOption(option);
        quizOptionsEl.appendChild(optionEl);
    });

    nextQuestionBtn.classList.add('hidden');
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestionBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizQuestionEl.textContent = "Quiz Completed!";
    quizOptionsEl.innerHTML = '';
    quizScoreEl.textContent = score;
    quizResult.classList.remove('hidden');
    nextQuestionBtn.classList.add('hidden');
}

const startQuizBtn = document.getElementById('start-quiz');
startQuizBtn.addEventListener('click', openQuizModal);