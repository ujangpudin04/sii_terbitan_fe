export const db = {
  users: {
    profile: {
      about: [
        { property: 'Full Name', value: 'Hisbikal Haqqi Muflihin', icon: 'ri-user-3-line' },
        { property: 'Status', value: 'active', icon: 'ri-check-line' },
        { property: 'Role', value: 'Developer', icon: 'ri-star-line' },
        { property: 'Country', value: 'INA', icon: 'ri-flag-line' },
        { property: 'Language', value: 'Indonesian', icon: 'ri-translate-2' }
      ],
      contacts: [
        { property: 'Contact', value: '082299027569', icon: 'ri-phone-line' },
        { property: 'Email', value: 'hisbikalhaqiqi32@gmail.com', icon: 'ri-mail-open-line' }
      ],
      overview: [
        { property: 'Task Compiled', value: '13.5k', icon: 'ri-check-line' },
        { property: 'Connections', value: '897', icon: 'ri-user-3-line' },
        { property: 'Projects Compiled', value: '146', icon: 'ri-function-line' }
      ],
      connections: [
        {
          isFriend: false,
          connections: '45',
          name: 'Cecilia Payne',
          avatar: '/images/avatars/2.png'
        },
        {
          isFriend: true,
          connections: '1.32k',
          name: 'Curtis Fletcher',
          avatar: '/images/avatars/3.png'
        },
        {
          isFriend: true,
          connections: '125',
          name: 'Alice Stone',
          avatar: '/images/avatars/4.png'
        },
        {
          isFriend: false,
          connections: '456',
          name: 'Darrell Barnes',
          avatar: '/images/avatars/5.png'
        },
        {
          isFriend: false,
          connections: '1.2k',
          name: 'Eugenia Moore',
          avatar: '/images/avatars/8.png'
        }
      ],
      teamsTech: [
        {
          members: 72,
          ChipColor: 'error',
          chipText: 'Developer',
          title: 'React Developers',
          avatar: '/images/logos/react-bg.png'
        },
        {
          members: 122,
          chipText: 'Support',
          ChipColor: 'primary',
          title: 'Support Team',
          avatar: '/images/icons/support-bg.png'
        },
        {
          members: 7,
          ChipColor: 'info',
          chipText: 'Designer',
          title: 'UI Designer',
          avatar: '/images/logos/figma-bg.png'
        },
        {
          members: 289,
          ChipColor: 'error',
          chipText: 'Developer',
          title: 'Vue.js Developers',
          avatar: '/images/logos/vue-bg.png'
        },
        {
          members: 24,
          chipText: 'Marketing',
          ChipColor: 'secondary',
          title: 'Digital Marketing',
          avatar: '/images/logos/twitter-bg.png'
        }
      ],
      projectTable: [
        {
          id: 1,
          title: '"Unlocking Creativity: The Science Behind Daydreaming"',
          subtitle: 'React Project',
          leader: 'Eileen',
          avatar: '/images/logos/react-bg.png',
          avatarGroup: [
            '/images/avatars/1.png',
            '/images/avatars/2.png',
            '/images/avatars/3.png',
            '/images/avatars/4.png'
          ],
          status: 'Pending In Manager Penerbitan'
        },
        {
          id: 2,
          leader: 'Owen',
          title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
          subtitle: 'Figma Project',
          avatar: '/images/logos/figma-bg.png',
          avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png'],
          status: 'Waiting on publish'
        },
        {
          id: 3,
          title: 'The Rise of Virtual Reality: Transforming Entertainment and Education',
          subtitle: 'VueJs Project',
          leader: 'Keith',
          avatar: '/images/logos/vue-bg.png',
          avatarGroup: [
            '/images/avatars/7.png',
            '/images/avatars/8.png',
            '/images/avatars/1.png',
            '/images/avatars/2.png'
          ],
          status: 'Pending In Editor Awal'
        },
        {
          id: 4,
          title: 'Mindful Eating: Strategies for a Healthier Relationship with Food',
          subtitle: 'Xamarin Project',
          leader: 'Merline',
          avatar: '/images/icons/mobile-bg.png',
          avatarGroup: [
            '/images/avatars/3.png',
            '/images/avatars/4.png',
            '/images/avatars/5.png',
            '/images/avatars/6.png'
          ],
          status: 'Pending In Editor Awal'
        },
        {
          id: 5,
          leader: 'Harmonia',
          title: 'The Future of Work: Adapting to a Remote-First World',
          subtitle: 'Python Project',
          avatar: '/images/logos/python-bg.png',
          avatarGroup: ['/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png'],
          status: 'Pending In Editor Awal'
        },
        {
          id: 6,
          leader: 'Allyson',
          title: 'Gardening for Beginners: Cultivating Your Green Thumb',
          subtitle: 'Sketch Project',
          avatar: '/images/logos/sketch-bg.png',
          avatarGroup: [
            '/images/avatars/2.png',
            '/images/avatars/3.png',
            '/images/avatars/4.png',
            '/images/avatars/5.png'
          ],
          status: 'Pending In Editor Awal'
        },
        {
          id: 7,
          title: 'Hoffman Website',
          subtitle: 'HTML Project',
          leader: 'Georgie',
          avatar: '/images/logos/html-bg.png',
          avatarGroup: [
            '/images/avatars/6.png',
            '/images/avatars/7.png',
            '/images/avatars/8.png',
            '/images/avatars/1.png'
          ],
          status: 'Pending In Editor Awal'
        },
        {
          id: 8,
          title: 'eCommerce Website',
          subtitle: 'React Project',
          leader: 'Eileen',
          avatar: '/images/logos/react-bg.png',
          avatarGroup: [
            '/images/avatars/1.png',
            '/images/avatars/2.png',
            '/images/avatars/3.png',
            '/images/avatars/4.png'
          ],
          status: 'Pending In Editor Awal'
        },
        {
          id: 9,
          leader: 'Owen',
          title: 'Retro Logo Design',
          subtitle: 'Figma Project',
          avatar: '/images/logos/figma-bg.png',
          avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png'],
          status: 'Pending In Editor Awal'
        },
        {
          id: 10,
          title: 'Admin Dashboard',
          subtitle: 'VueJs Project',
          leader: 'Keith',
          avatar: '/images/logos/vue-bg.png',
          avatarGroup: [
            '/images/avatars/7.png',
            '/images/avatars/8.png',
            '/images/avatars/1.png',
            '/images/avatars/2.png'
          ],
          status: 'Pending In Editor Awal'
        }
      ]
    },
    teams: [
      {
        extraMembers: 9,
        title: 'Unlocking Creativity: The Science Behind Daydreaming',
        avatar: '/images/logos/react-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Hisbikal ' },
          { avatar: '/images/avatars/2.png', name: 'Santo Margen' },
          { avatar: '/images/avatars/3.png', name: 'Ujang' }
        ],
        description:
          'We don’t make assumptions about the rest of your technology stack, so you can develop features in React.',
        chips: [
          {
            title: 'Fiction',
            color: 'primary'
          },
          {
            title: 'Horror',
            color: 'info'
          }
        ]
      },
      {
        extraMembers: 4,
        title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
        avatar: '/images/logos/vue-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Hisbikal' },
          { avatar: '/images/avatars/6.png', name: 'Santo' },
          { avatar: '/images/avatars/7.png', name: 'Margen' }
        ],
        description:
          'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen. ',
        chips: [
          {
            title: 'Fiction',
            color: 'success'
          },
          {
            color: 'warning',
            title: 'Developer'
          }
        ]
      },
      {
        title: 'The Rise of Virtual Reality: Transforming Entertainment and Education',
        avatar: '/images/logos/xd-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Jimmy Ressula' },
          { avatar: '/images/avatars/2.png', name: 'Kristi Lawker' },
          { avatar: '/images/avatars/3.png', name: 'Danny Paul' }
        ],
        description:
          'A design or product team is more than just the people on it. A team includes the people, the roles they play.',
        chips: [
          {
            title: 'Action',
            color: 'warning'
          },
          {
            title: 'Horror',
            color: 'error'
          }
        ]
      }
    ],
    projects: [
      {
        daysLeft: 28,
        comments: 15,
        totalTask: 344,
        hours: '380/244',
        tasks: '290/344',
        budget: '$18.2k',
        completedTask: 328,
        deadline: '28/2/22',
        chipColor: 'success',
        startDate: '14/2/21',
        budgetSpent: '$24.8k',
        members: '280 reviewer',
        title: 'Social Banners',
        client: 'Christian Jimenez',
        avatar: '/images/icons/social-bg.png',
        description: 'We are Consulting, Software Development and Web Development Services.',
        avatarGroup: [
          { avatar: '/images/avatars/1.png', name: 'Vinnie Mostowy' },
          { avatar: '/images/avatars/2.png', name: 'Allen Rieske' },
          { avatar: '/images/avatars/3.png', name: 'Julee Rossignol' }
        ]
      },
      {
        daysLeft: 15,
        comments: 236,
        totalTask: 90,
        tasks: '12/90',
        hours: '98/135',
        budget: '$1.8k',
        completedTask: 38,
        deadline: '21/6/22',
        budgetSpent: '$2.4k',
        chipColor: 'warning',
        startDate: '18/8/21',
        members: '280 reviewer',
        title: 'Admin Template',
        client: 'Jeffrey Phillips',
        avatar: '/images/logos/react-bg.png',
        avatarGroup: [
          { avatar: '/images/avatars/4.png', name: "Kaith D'souza" },
          { avatar: '/images/avatars/5.png', name: 'John Doe' },
          { avatar: '/images/avatars/6.png', name: 'Alan Walker' }
        ],
        description: "Time is our most valuable asset, that's why we want to help you save it."
      },
      {
        daysLeft: 45,
        comments: 98,
        budget: '$420',
        totalTask: 140,
        tasks: '22/140',
        hours: '880/421',
        completedTask: 95,
        chipColor: 'error',
        budgetSpent: '$980',
        deadline: '8/10/21',
        title: 'App Design',
        startDate: '24/7/21',
        members: '280 reviewer',
        client: 'Ricky McDonald',
        avatar: '/images/logos/vue-bg.png',
        description: 'Figma dashboard app design combines the user UI & UX.',
        avatarGroup: [
          { avatar: '/images/avatars/7.png', name: 'Jimmy Ressula' },
          { avatar: '/images/avatars/8.png', name: 'Kristi Lawker' },
          { avatar: '/images/avatars/1.png', name: 'Danny Paul' }
        ]
      },
      {
        comments: 120,
        daysLeft: 126,
        totalTask: 420,
        budget: '2.43k',
        tasks: '237/420',
        hours: '380/820',
        completedTask: 302,
        deadline: '12/9/22',
        budgetSpent: '$8.5k',
        chipColor: 'warning',
        startDate: '10/2/19',
        members: '280 reviewer',
        client: 'Hulda Wright',
        title: 'Create Website',
        avatar: '/images/logos/html-bg.png',
        description: 'Your domain name should reflect your products or services so that your...',
        avatarGroup: [
          { avatar: '/images/avatars/2.png', name: 'Andrew Tye' },
          { avatar: '/images/avatars/3.png', name: 'Rishi Swaat' },
          { avatar: '/images/avatars/4.png', name: 'Rossie Kim' }
        ]
      },
      {
        daysLeft: 5,
        comments: 20,
        totalTask: 285,
        tasks: '29/285',
        budget: '28.4k',
        hours: '142/420',
        chipColor: 'error',
        completedTask: 100,
        deadline: '25/12/21',
        startDate: '12/12/20',
        members: '280 reviewer',
        budgetSpent: '$52.7k',
        client: 'Jerry Greene',
        title: 'Figma Dashboard',
        avatar: '/images/logos/figma-bg.png',
        description: "Time is our most valuable asset, that's why we want to help you save it.",
        avatarGroup: [
          { avatar: '/images/avatars/5.png', name: 'Kim Merchent' },
          { avatar: '/images/avatars/6.png', name: "Sam D'souza" },
          { avatar: '/images/avatars/7.png', name: 'Nurvi Karlos' }
        ]
      },
      {
        daysLeft: 4,
        comments: 98,
        budget: '$655',
        totalTask: 290,
        tasks: '29/290',
        hours: '580/445',
        completedTask: 290,
        budgetSpent: '$1.3k',
        chipColor: 'success',
        deadline: '02/11/21',
        startDate: '17/8/21',
        title: 'Logo Design',
        members: '280 reviewer',
        client: 'Olive Strickland',
        avatar: '/images/logos/xd-bg.png',
        description: 'Premium logo designs created by top logo designers. Create the branding.',
        avatarGroup: [
          { avatar: '/images/avatars/8.png', name: 'Kim Karlos' },
          { avatar: '/images/avatars/1.png', name: 'Katy Turner' },
          { avatar: '/images/avatars/2.png', name: 'Peter Adward' }
        ]
      }
    ],
    connections: [
      {
        tasks: '834',
        projects: '18',
        isConnected: true,
        connections: '129',
        name: 'Mark Gilbert',
        designation: 'UI Designer',
        avatar: '/images/avatars/1.png',
        chips: [
          {
            title: 'Figma',
            color: 'secondary'
          },
          {
            title: 'Sketch',
            color: 'warning'
          }
        ]
      },
      {
        tasks: '2.31k',
        projects: '112',
        isConnected: false,
        connections: '1.28k',
        name: 'Eugenia Parsons',
        designation: 'Developer',
        avatar: '/images/avatars/2.png',
        chips: [
          {
            color: 'error',
            title: 'Angular'
          },
          {
            color: 'info',
            title: 'React'
          }
        ]
      },
      {
        tasks: '1.25k',
        projects: '32',
        isConnected: false,
        connections: '890',
        name: 'Francis Byrd',
        designation: 'Developer',
        avatar: '/images/avatars/3.png',
        chips: [
          {
            title: 'HTML',
            color: 'primary'
          },
          {
            color: 'info',
            title: 'React'
          }
        ]
      },
      {
        tasks: '12.4k',
        projects: '86',
        isConnected: false,
        connections: '890',
        name: 'Leon Lucas',
        designation: 'UI/UX Designer',
        avatar: '/images/avatars/4.png',
        chips: [
          {
            title: 'Figma',
            color: 'secondary'
          },
          {
            title: 'Sketch',
            color: 'warning'
          },
          {
            color: 'primary',
            title: 'Photoshop'
          }
        ]
      },
      {
        tasks: '23.8k',
        projects: '244',
        isConnected: true,
        connections: '2.14k',
        name: 'Jayden Rogers',
        designation: 'Full Stack Developer',
        avatar: '/images/avatars/5.png',
        chips: [
          {
            color: 'info',
            title: 'React'
          },
          {
            title: 'HTML',
            color: 'warning'
          },
          {
            color: 'success',
            title: 'Node.js'
          }
        ]
      },
      {
        tasks: '1.28k',
        projects: '32',
        isConnected: false,
        designation: 'SEO',
        connections: '1.27k',
        name: 'Jeanette Powell',
        avatar: '/images/avatars/6.png',
        chips: [
          {
            title: 'Analysis',
            color: 'secondary'
          },
          {
            color: 'success',
            title: 'Writing'
          }
        ]
      }
    ]
  },
  profileHeader: {
    fullName: 'Hisbikal Haqqi Muflihin',
    location: 'Depok City',
    joiningDate: 'Oktober 2024',
    designation: 'Programmer',
    profileImg: '/images/avatars/1.png',
    designationIcon: 'ri-palette-line',
    coverImg: '/images/pages/profile-banner.png'
  }
}
