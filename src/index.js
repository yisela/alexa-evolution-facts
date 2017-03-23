'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "We have about the same number of hairs on our bodies as a chimpanzee, but ours are so fine they are almost invisible.",
                "During the French Revolution, a theory of evolution proposed by Baptiste lamarck was used to challenge the authority of the king as well as that of the church. England, anticipating problems, made evolution a scandalous idea",
                "All humans originated in Africa, however migrations from the continent happened in several ocassions. The groups that left first might have very well met those that had left behind",
                "About 9% of humans are born without a plantaris muscle, the one in the foot our ancestors used to grip and manipulate objects. Those that have it, though, hardly use it as it has lost its ability in our species.",
                "Some snakes have hipbones, which shows they once had four legs like their close cousins the lizards.",
                "Birds and dinosaurs both evolved from reptiles. The closest living reptilian relation of a bird is the crocodile.",
                "Some scientists think that the pink tissue in the corner of the human eye is a remnant of a third eye, not unlike that of birds, reptiles and fish.",
                "Until about 10,000 years ago, most people had brown eyes. A single genetic mutation originating in the Black Sea is responsible for the current 8% of the world’s population that has blue eyes.",
                "All humans develop a tail in the womb that eventually dissolves.",
                "About 85% of people can't voluntarily moe their ears. It's thought that we lost this ability somewhere on the way to become the humans we are today.",
                "About 80,000 years ago, humanity's effective population size was reduced drastically. The reasons are unknown, although hypothesis have been given for volcanic activity and interbreeding among small populations.",
                "Belief in evolution is highest among Icelanders, with 80 per cent... and lowest in Turkey, with 24 per cent.",
                "The phrase 'Survival of the Fittest' is not Darwin's. It was actually oined by the philosopher Herbert Spencer.",
                "If all frog eggs were successful, we would be knee-deep in frogs within the next ten years.",
                "Around 600 million years ago, the first creatures with bones and shells began to appear. More organisms showed up during this time than any other point in history.",
                "Humans are the least genetically diverse apes, because we all share a common origin in Africa.",
                "Until about 250,000 years ago, homo sapiens lived alongside neanderthals. Some of their genes made it into our DNA as well.",
                "We are still evolving, although most of our changes revolv around size size and development, and food tolerance.",
                "The majority of DNA is junk, meaning that it does not code for aprotein. Evolution is often incomplete or inefficient.",
                "Every single person you know or will know, descends from one East African woman who lived about 200-150,000 years ago.",
                "Darwin never said that humans come from monkeys. His words actually quote a hairy, tailed, quadruped and probably arboreal ancestor.",
                "Humans navigated the Indian ocean in boats and arrived to Australia about 50,000 years ago",
                "Humans share about 31% of their genes with yeast, and about 50% with bananas.",
                "An “evolutionary response to the colour red” has been offered to explain why goalkeepers in red jerseys save more goals in penalty shoot-outs.",
                "Goosepimples are a remnant of our evolutionary predecessors. They occur when tiny muscles around the base of each hair tense, pulling the hair more erect and making for a better insulation. The only detail is that we don't have fur, so this has no effect.",
                "The animal most frequently mentioned in Darwin’s Origin Of Species is the pigeon.",
                "Darwin began formulating his theory in the late 1830s, but kept it under wraps for two decades.",
                "The platypus is a strange creature due to its early separation as a mammal from reptiles. It lays eggs but also produces milk, and it has evolved an ability to produce venom independently of its reptile ancestors.",
                "Biological Evolution Started 3.7 Billion Years Ago, when the earliest bacteria dominated the land and the sea.",
                "Darwin didn’t have a Eureka moment in the Galapagos islands. Rather, his ideas evolved over time, and were based on rudimentary theories about evolution that had been around for decades.",
                "Humans' lack of hair is an adaptation to navigate shallow waters, lose heat faster in the hot savanna and reduce the number of parasites in the body.",
                "Homo Sapiens has always used fire as a tool. Our evolution has was accompanied and augmented by it.",
                "Hiccups might have originated in our watery ancestors. The mechanism that allows fish to push water over gills has been imperfectly rewired in mammals. This can sometimes cause spams, or hiccups."
            ],
            "SKILL_NAME" : "Evolution Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me an evolution fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                "A year on Mercury is just 88 days long.",
                "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
                "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
                "On Mars, the Sun appears about half the size as it does on Earth.",
                "Earth is the only planet not named after a god.",
                "Jupiter has the shortest day of all the planets.",
                "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
                "The Sun contains 99.86% of the mass in the Solar System.",
                "The Sun is an almost perfect sphere.",
                "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
                "Saturn radiates two and a half times more energy into space than it receives from the sun.",
                "The temperature inside the Sun can reach 15 million degrees Celsius.",
                "The Moon is moving approximately 3.8 cm away from our planet every year."
            ],
            "SKILL_NAME" : "American Evolution Facts"
        }
    },
    "en-GB": {
        "translation": {
            "FACTS": [
                "A year on Mercury is just 88 days long.",
                "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
                "Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.",
                "On Mars, the Sun appears about half the size as it does on Earth.",
                "Earth is the only planet not named after a god.",
                "Jupiter has the shortest day of all the planets.",
                "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
                "The Sun contains 99.86% of the mass in the Solar System.",
                "The Sun is an almost perfect sphere.",
                "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
                "Saturn radiates two and a half times more energy into space than it receives from the sun.",
                "The temperature inside the Sun can reach 15 million degrees Celsius.",
                "The Moon is moving approximately 3.8 cm away from our planet every year."
            ],
            "SKILL_NAME" : "British Evolution Facts"
        }
    },
    "de": {
        "translation": {
            "FACTS": [
                "Ein Jahr dauert auf dem Merkur nur 88 Tage.",
                "Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.",
                "Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.",
                "Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.",
                "Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.",
                "Jupiter hat den kürzesten Tag aller Planeten.",
                "Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.",
                "Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.",
                "Die Sonne ist eine fast perfekte Kugel.",
                "Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.",
                "Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.",
                "Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.",
                "Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr."
            ],
            "SKILL_NAME" : "Weltraumwissen auf Deutsch",
            "GET_FACT_MESSAGE" : "Hier sind deine Fakten: ",
            "HELP_MESSAGE" : "Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?",
            "HELP_REPROMPT" : "Wie kann ich dir helfen?",
            "STOP_MESSAGE" : "Auf Wiedersehen!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
