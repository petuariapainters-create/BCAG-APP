/*
  ===========================================================
  BCAG APP CONTENT
  ===========================================================
  This is the ONLY file you should normally need to edit.

  It holds all the actual words, images and dates in the app.
  The other files (index.html, style.css) control how things
  LOOK and BEHAVE — you shouldn't need to touch those for
  everyday updates.

  HOW TO EDIT SAFELY:
  - To change text, just type over the words between the
    quote marks " " — don't delete the quote marks themselves.
  - To add a new item (a new painting, a new tip, a new
    calendar date), copy an ENTIRE existing block — from its
    opening { to its closing }, — and paste it just above or
    below, then change the details inside your copy.
  - To remove an item, delete its entire block, from { to },
  - Always keep the commas between items. If you're not sure,
    copy an existing block rather than typing one from scratch.
  - Images: put your photo files in this SAME folder as this
    file (no subfolders — keeps uploading from a phone/tablet
    simple), then just type the filename here, e.g. "sunset.jpg"

  If you break something, don't worry — send me (Claude) this
  file and I'll help fix it.
  ===========================================================
*/

const CONTENT = {

  // -----------------------------------------------------
  // ABOUT — session info, cost, what to bring, location
  // -----------------------------------------------------
  about: {
    title: "About BCAG",
    body:
      "Welcome to BCAG! We meet every Saturday morning for a relaxed watercolour painting session.\n\n" +
      "Time: 10:00am – 12:00pm\n" +
      "Location: [add your venue/address here]\n" +
      "Cost: [add price here]\n\n" +
      "What to bring: your own paints and brushes if you have them — spares are available to borrow. Just bring yourself if you're new!"
  },

  // -----------------------------------------------------
  // INSPIRATION GALLERY — images members can download
  // -----------------------------------------------------
  inspirationGallery: [
    {
      title: "Harbour Morning",
      image: "placeholder-1.jpg",
      note: "Watercolour, 2026"
    },
    {
      title: "Autumn Leaves",
      image: "placeholder-2.jpg",
      note: "Watercolour, 2026"
    }
  ],

  // -----------------------------------------------------
  // TEMPLATES — you upload and print these, members can
  // only VIEW them in the app, not download them
  // -----------------------------------------------------
  templates: [
    {
      title: "Simple Florals Outline",
      image: "placeholder-template-1.jpg"
    }
  ],

  // -----------------------------------------------------
  // MEMBERS GALLERY — you add these yourself after members
  // send you their paintings
  // -----------------------------------------------------
  membersGallery: [
    {
      title: "Reflections",
      member: "Priya",
      image: "placeholder-member-1.jpg"
    }
  ],

  // -----------------------------------------------------
  // CALENDAR — status is either "hosted" or "self-run"
  // "self-run" = you're away, group still meets, members
  // set up their own tables/chairs
  // -----------------------------------------------------
  calendar: [
    {
      date: "2026-09-20",
      time: "10:00am",
      status: "hosted",
      note: ""
    },
    {
      date: "2026-09-27",
      time: "10:00am",
      status: "self-run",
      note: "Dan is on holiday — please set up your own tables and chairs"
    }
  ],

  // -----------------------------------------------------
  // PAINTING TUTORIALS — tap the image to open the video
  // -----------------------------------------------------
  tutorials: [
    {
      title: "Mixing a granulating grey",
      image: "placeholder-tutorial-1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=REPLACE_ME"
    }
  ],

  // -----------------------------------------------------
  // ART EQUIPMENT — simple list of materials
  // -----------------------------------------------------
  equipment: [
    { item: "300gsm cold-press watercolour paper", note: "A4 pad or loose sheets" },
    { item: "Round brush, size 8", note: "" },
    { item: "Round brush, size 4", note: "" },
    { item: "Water pot", note: "Any jam jar works" },
    { item: "Kitchen paper", note: "For blotting" }
  ],

  // -----------------------------------------------------
  // DAN'S RECOMMENDED COLOURS
  // -----------------------------------------------------
  colours: [
    { name: "Cobalt Blue", brand: "Winsor & Newton", note: "" },
    { name: "Burnt Sienna", brand: "Winsor & Newton", note: "" },
    { name: "Yellow Ochre", brand: "Winsor & Newton", note: "" }
  ]

};
