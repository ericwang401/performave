export default {
  author: "Eric Wang",
  hero: {
    subtitle: "Full-stack web developer",
    description: "I enjoy building web applications for the open-source ecosystem. I believe open-source apps is the future of the internet.",
    cta: "Browse Projects",
  },
  products: {
    featured: [
      {
        name: "Stratum",
        medium: "Vue · Laravel · Proxmox",
        summary: "Beautiful KVM Server Control Panel",
        copy: [
          "Easily manage your servers on Proxmox. Join the Discord community here https://discord.gg/GhCQCypEBQ"
        ],
        links: {
          color: "#363636",
          primary: {
            name: "View",
            url: "https://github.com/StratumPanel/Stratum-Panel/"
          }
        },
        images: [
          "/doubletext/0.jpg",
        ]
      },
      {
        name: "ClimbList",
        medium: "React · Next.js",
        summary: "Climbing gym discovery",
        copy: [
          "The comparison site for climbers — coming soon."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Coming Soon",
            url: "https://climblist.com/"
          }
        },
        images: [
          "/climblist/0.jpg",
          "/climblist/1.jpg",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Volunteer Portal",
        description: "Portal for tracking volunteering opportunities.",
        link: {
          name: "Github",
          url: "https://github.com/zendesk/volunteer_portal"
        }
      },
      {
        name: "Final Slash VR",
        description: "Short survival experience on an abandoned planet.",
        link: {
          name: "Download",
          url: "https://samzx.itch.io/final-slash-vr"
        }
      },
      {
        name: "MPH Watch",
        description: "Stats for miners mining on Mining Pool Hub.",
        link: {
          name: "Demo",
          url: "https://mphwatch.samxie.net/demo"
        }
      }
    ]
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/unimelb.svg",
        url: "https://unimelb.edu.au/"
      },
      {
        src: "/logos/zendesk.svg",
        url: "https://www.zendesk.com/"
      },
      {
        src: "/logos/cashapp.svg",
        url: "https://cash.app/"
      }
  ]
  },
  footer: {
    tagline: "Sam Xie — Melbourne, Australia",
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/samxstudio",
        fa: "fab fa-twitter" // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
      },
      {
        name: "Medium",
        url: "https://medium.com/@samxie",
        fa: "fab fa-medium"
      },
      {
        name: "Github",
        url: "https://github.com/samzx",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/xiesam/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:contact@samxie.net",
        fa: "fa fa-envelope"
      },
    ]
  }
}
