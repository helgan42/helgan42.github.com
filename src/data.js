import cheese from "@/assets/cheese.webp"
import grinch from "@/assets/grinch.mp3"
import grinchAvatar from "@/assets/grinch.png"
import sofaAvatar from "@/assets/sofa.png"
import saw from "@/assets/saw.webp"
import tickingAudio from "@/assets/ticking.mp3"
import momoAvatar from "@/assets/momo.webp"
import sawAvatar from "@/assets/saw.png"
import merry from "@/assets/merry.mp3"

var data = {
    sofa: './assets/sofa.png',
    questions: {
        start: {
            background: saw,
            rightAvatar: sawAvatar,
            question: "I've stolen your precious gift, if you want it back, you'll have to play a little game with me",
            answers: [
                {
                    text: "Im ready",
                    correct: true,
                    next: "cheese",
                },
                {
                    text: "Run away",
                    correct: false,
                    next: "end",
                }
            ]
        },
        end: {
            question: "Goodbye, no cheese for you",
            audio: new Audio(grinch),
            rightAvatar: grinchAvatar,
            answers: [
                {
                    text: "Restart",
                    next: "start"
                }
            ]
        },
        cheese: {
            background: cheese,
            question: "Where does the best cheese come from?",
            rightAvatar: sawAvatar,
            answers: [
                {
                    id: "france-id",
                    audio: new Audio(grinch),
                    rightAvatar: grinchAvatar,
                    text: "France",
                    next: "runaway",
                },
                {
                    text: "Swiss",
                    next: "end",
                },
                {
                    text: "Italy",
                    next: "cheese_sure",
                },
            ]
        },
        cheese_sure: {
            background: "https://i.ytimg.com/vi/b3qR5-1f7PY/maxresdefault.jpg",
            question: "See? It wasn't that difficult",
            rightAvatar: sawAvatar,
            answers: [
                {
                    text: "Putain d'Italiens",
                    next: "movie"
                },
                {
                    text: "Im bleeding red wine",
                    next: "movie"
                },
            ]
        },
        movie: {
            question: "Im about to ask you a question, you'll have 3-5 seconds to type",
            rightAvatar: sawAvatar,
            answers: [
                {
                    text: "My gift is waiting",
                    next: "killer_sofa"
                },
            ]
        },
        killer_sofa: {
            question: "What is the name of the best horror movie?",
            rightAvatar: sofaAvatar,
            audio: new Audio(tickingAudio),
            input: {
                correct: "Killer Sofa",
                timeout: 5
            },
            next: {
                correct: "pre_titles",
                wrong: "end"
            }
        },
        pre_titles: {
            question: "That was correct, be ready for the next one",
            rightAvatar: sawAvatar,
            answers: [
                {
                    text: "Is this the best you got?",
                    next: "momo_intro"
                },
            ]
        },
        momo_intro: {
            question: "Stop Right there!",
            rightAvatar: momoAvatar,
            answers: [
                {
                    text: "Momo?!?",
                    next: "before_merry"
                },
            ]
        },
        before_merry: {
            question: "Momo is here to help you find the gift, keep distracting them! Im gonna search for it",
            rightAvatar: momoAvatar,
            background: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/infinity-nikki-how-get-clothes-cloaks-momo.jpg",
            answers: [
                {
                    text: "Let's goo!",
                    next: "titles"
                },
            ]
        },
        titles: {
            question: "What is the correct title for the sofa, decide!",
            rightAvatar: grinchAvatar,
            audio: new Audio(tickingAudio),
            answers: [
                {
                    text: "Piece of Furniture",
                    next: "after_titles",
                },
                {
                    text: "Miss indecision",
                    next: "after_titles",
                },
                {
                    text: "NONO the sofa",
                    next: "after_titles",
                },
                {
                    text: "Ma-Lady",
                    next: "after_titles",
                },
            ]
        },
        after_titles: {
            question: "They were all correct by the way! 😈",
            rightAvatar: grinchAvatar,
            answers: [
                {
                    text: "Stop with this game!",
                    next: "dehya"
                },
            ]
        },
        dehya: {
            question: "Who's the queen of the desert?",
            rightAvatar: sofaAvatar,
            audio: new Audio(tickingAudio),
            input: {
                correct: "dehya",
                timeout: 5
            },
            next: {
                correct: "pre_canberra",
                wrong: "end"
            }
        },
        pre_canberra: {
            question: "You thought that was easy? Time to scale up the difficulty",
            rightAvatar: sofaAvatar,
            audio: new Audio(tickingAudio),
            answers: [
                {
                    text: "Oh no...",
                    next: "canberra"
                },
            ]
        },
        canberra: {
            question: "What is the capital of australia",
            rightAvatar: grinchAvatar,
            audio: new Audio(tickingAudio),
            input: {
                correct: "canberra",
                timeout: 5
            },
            next: {
                correct: "pre_math",
                wrong: "end"
            }
        },
        pre_math: {
            question: "This doesn't stop here",
            rightAvatar: sawAvatar,
            answers: [
                {
                    text: "Im too good for you!",
                    next: "math"
                },
            ]
        },
        math: {
            question: "What is the solution to 77+33",
            rightAvatar: sawAvatar,
            audio: new Audio(tickingAudio),
            input: {
                correct: "110",
                timeout: 5
            },
            next: {
                correct: "after_math",
                wrong: "end"
            }
        },
        after_math: {
            question: "Next question will involve physics, are you ready?",
            rightAvatar: sawAvatar,
            answers: [
                {
                    text: "Aaaaaaaaah heeelp!",
                    next: "pre_merry"
                },
            ]
        },
        pre_merry: {
            question: "I found the gift! Quick, come with me! We can escape",
            rightAvatar: momoAvatar,
            background: "https://assetsio.gnwcdn.com/All-outfits-in-Infinity-Nikki-and-how-to-get-them-cover_hGHcHhI.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
            answers: [
                {
                    text: "Thanks momo!",
                    next: "merry"
                },
            ]
        },
        merry: {
            question: "The message comes from a wolfie: Merry christmas my lovely sofa! I wish you the best of the best. For the gift ill need your infinite nikki account :)",
            rightAvatar: momoAvatar,
            background: "https://sm.ign.com/ign_it/screenshot/default/infinitynikki-firstpreview-blogroll-1717030993645_8xpu.jpg",
            audio: new Audio(merry),
        }
    }

}

export { data };