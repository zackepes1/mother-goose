import { consultation, plan, support, blog, blog2, blog3 } from "../assets";

export const howitworks = [
  {
    id: 1,
    title: "Initial Consultation",
    img: consultation,
    contents: [
      {
        id: 1,
        content: "Let's get acquainted! We'll have a comprehensive conversation to understand your needs, your baby's feeding habits, and any challenges you're facing."
      },
      {
        id: 2,
        content: "This is your chance to ask questions, express concerns, and feel heard."
      }
    ]
  },
  {
    id: 2,
    title: "Personalized Plan",
    img: plan,
    contents: [
      {
        id: 1,
        content: "Based on our initial discussion, I'll craft a customized plan tailored to your unique situation. We'll address latching techniques, milk supply optimization, pumping schedules, and more."
      },
      {
        id: 2,
        content: "The plan will be accessible through your personal account on the app, allowing you to review it anytime."
      }
    ]
  },
  {
    id: 3,
    title: "Ongoing Support",
    img: support,
    contents: [
      {
        id: 1,
        content: "You're not alone! You'll have access to my ongoing support through convenient channels like messaging, video calls, and email."
      },
      {
        id: 2,
        content: "Feel free to ask questions, share updates, and receive guidance as you progress through your feeding journey."
      }
    ]
  }
]

export const blogposts = [
  {
    id: 1,
    title: "A Haven of Support: My Breastfeeding Journey with Mother Goose Lactation",
    img: blog,
    contents: [
      {
        id: 1,
        content: "My breastfeeding journey started rocky. My twins arrived early, latching was a puzzle, and exhaustion held me hostage. Google offered conflicting advice, and well-meaning friends often made things worse. I was sinking in a sea of confusion and self-doubt."
      },
      {
        id: 2,
        content: "That's when I stumbled upon Mother Goose Lactation consultants. From the first phone call, their warmth and genuine care shone through. I was connected with Sarah, a seasoned consultant with a wealth of knowledge and a smile that could calm a hurricane."
      }
    ]
  },
  {
    id: 2,
    title: "From Confusion to Confidence: Mother Goose Helped Me Find My Breastfeeding Groove",
    img: blog2,
    contents: [
      {
        id: 1,
        content: "Before becoming a mom, I envisioned breastfeeding as a picture-perfect scene straight out of a storybook. Reality, of course, had other plans. My little one, Olivia, struggled to latch, and my milk supply seemed hesitant to keep up. Frustration and tears became my morning companions, leaving me feeling overwhelmed and lost."
      },
      {
        id: 2,
        content: "Then, I found Mother Goose. Enter Kelsey, a lactation consultant with the patience of a saint and the knowledge of a breastfeeding encyclopedia. She assessed our situation calmly, expertly identifying the challenges and devising a plan tailor-made for my twins and me."
      }
    ]
  },
  {
    id: 3,
    title: "More Than Lactation Consultants: Mother Goose is a Mother's Support System",
    img: blog3,
    contents: [
      {
        id: 1,
        content: "I knew breastfeeding would be challenging, but nothing prepared me for the reality of cracked nipples, pumping woes, and a fussy baby who seemed determined to stay hungry. My confidence dwindled with each failed latch, and loneliness settled in like a thick fog."
      },
      {
        id: 2,
        content: "Then, a friend recommended Mother Goose. Enter David, a lactation consultant with a calming presence and a knack for making you feel like you're not alone. He listened to my worries without judgment, offering practical advice and gentle encouragement."
      }
    ]
  }
]
export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Us',
    route: '/about-us',
  },
  {
    label: 'Consulting Services',
    route: '/consulting-services',
  },
  {
    label: 'How It Works',
    route: '#howitworks',
  },
  {
    label: 'Blog',
    route: '#blog',
  },
]
