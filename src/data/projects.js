import demo1 from '../assets/videos/demo1.mp4'
import demo2 from '../assets/videos/demo2.mp4'

// edit this list to add/change projects; Projects.jsx renders whatever is here
const projects = [
  {
    title: 'Rate My GroupMates',
    keyword: 'Rate',
    description: 'A groupmate-rating platform built by a 4-person team, with a peer search engine over 9,300+ UCI courses imported from the Anteater API and autocomplete on course code and title. Runs on a TypeScript stack deployed to Vercel serverless functions.',
    tech: ['TypeScript', 'React', 'Express', 'MongoDB Atlas', 'Anteater API'],
    video: '',
    thumbnail: '',
    link: 'https://github.com/Ezpresso-depresso/Rate-My-GroupMates',
    live: 'https://rate-my-group-mates-ss5b.vercel.app/',
  },
  {
    title: 'YouTube Layout Reverter',
    keyword: 'YouTube',
    description: "A Chrome extension that injects CSS to restore YouTube's previous layout, with thumbnail resizing and Shorts blocking. Reached 600+ users with a 5.0-star rating on the Chrome Web Store.",
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome Extensions API'],
    video: '',
    thumbnail: '',
    link: 'https://github.com/kkawayuki/ytLayoutfix',
    live: 'https://chromewebstore.google.com/detail/classic-watch-layout-for/mfabblepdciecekilbabdhmedjejjhmh',
    liveLabel: 'web store', // optional; replaces the live button's text
  },
  {
    title: 'Participation Quiz Autograder',
    keyword: 'Autograder',
    description: 'Automates participation quiz grading for 165 students, cutting grading time by 10-15x while flagging ambiguous responses for manual review. A web interface lets course staff run grading and draft changes before pushing to Canvas.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Canvas API'],
    video: '',
    thumbnail: '',
    link: '',
    live: '',
  },
  {
    title: 'CRUD Marketplace',
    keyword: 'CRUD',
    description: 'A fullstack webapp built with React that uses RESTful API endpoints for the primary usage loop. Leverages Tailwind utility classes and Toast notifications for interactive user feedback.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB Atlas'],
    video: demo2,
    thumbnail: '',
    link: 'https://github.com/kkawayuki/crudMarketplaceFront',
    live: 'https://crud-marketplace-front.vercel.app/',
  },
  {
    title: 'ASCII Art Generator',
    keyword: 'ASCII', // short label shown in the navbar's projects dropdown
    description: 'Converts images to ASCII characters at user-adjustable output widths via slider. The application works by averaging luminance over pixel regions, then mapping them to characters of varying darkness.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
    video: demo1, // imported above; plays behind the selector buttons
    thumbnail: '', // e.g. '/images/ascii.png'
    link: 'https://github.com/kkawayuki/asciiArt',
    live: 'https://ascii-art-iota.vercel.app/', // hosted site url; leave '' if none (live button shows greyed out)
  },
  {
    title: 'Web-hosted Blackjack',
    keyword: 'Blackjack',
    hidden: true, // set to false (or remove) to show it again
    description: 'A browser blackjack game that uses the Deck of Cards REST API for deck state, shuffling and draws, with async/await handling requests without blocking the UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
    video: '',
    thumbnail: '',
    link: '',
    live: '',
  },
  {
    title: "Knight's Tour Solver",
    keyword: 'Knight',
    description: "Solves the knight's tour using Warnsdorff's heuristic on a graph representation of a chessboard. Replacing a BST with a left-leaning red-black tree cut runtime by 40%, verified with GTest.",
    tech: ['C++', 'GTest'],
    video: '',
    thumbnail: '',
    link: 'https://github.com/kkawayuki/KnightsTour',
    live: '',
  },
  {
    title: 'Markov Chain Text Generator',
    keyword: 'Markov',
    description: 'Generates new text by sampling word-to-word transitions learned from input files, tracking word frequencies in a std::unordered_map after sanitizing punctuation and whitespace.',
    tech: ['C++', 'STL'],
    video: '',
    thumbnail: '',
    link: 'https://github.com/kkawayuki/AI-Text-Gen',
    live: '',
  },
]

// projects marked hidden: true are left out everywhere
export default projects.filter((p) => !p.hidden)
