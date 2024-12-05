export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/Profile",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: "order.svg",
        },
        {
          id: 4,
          title: "Posts",
          url: "/posts",
          icon: "post2.svg",
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.svg",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];


  export const topDealUsers = [
      {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        amount: "₹2,546.75"
      },
      {
        id: 2,
        name: "Priya Verma",
        email: "priya.verma@example.com",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        amount: "₹1,234.50"
      },
      {
        id: 3,
        name: "Ravi Patel",
        email: "ravi.patel@example.com",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        amount: "₹5,120.30"
      },
      {
        id: 4,
        name: "Neha Gupta",
        email: "neha.gupta@example.com",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        amount: "₹876.45"
      },
      {
        id: 5,
        name: "Vikram Singh",
        email: "vikram.singh@example.com",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        amount: "₹3,995.20"
      },
      {
        id: 6,
        name: "Sanya Reddy",
        email: "sanya.reddy@example.com",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        amount: "₹2,300.50"
      },
      {
        id: 7,
        name: "Arjun Iyer",
        email: "arjun.iyer@example.com",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        amount: "₹4,520.00"
      },
      {
        id: 8,
        name: "Simran Kaur",
        email: "simran.kaur@example.com",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        amount: "₹1,650.75"
      },
    ]

    export const chartBoxUser = {
      color: "#8884d8",
      icon: "/userIcon.svg",
      title: "Total Users",
      number: "11.238",
      dataKey: "users",
      percentage: 45,
      chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
      ],
    };
    
    export const chartBoxProduct = {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Total Products",
      number: "238",
      dataKey: "products",
      percentage: 21,
      chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
      ],
    };
    export const chartBoxRevenue = {
      color: "teal",
      icon: "/revenueIcon.svg",
      title: "Total Revenue",
      number: "$56.432",
      dataKey: "revenue",
      percentage: -12,
      chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
      ],
    };
    export const chartBoxConversion = {
      color: "gold",
      icon: "/conversionIcon.svg",
      title: "Total Ratio",
      number: "2.6",
      dataKey: "ratio",
      percentage: 12,
      chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
      ],
    };
    
    export const barChartBoxRevenue = {
      title: "Profit Earned",
      color: "#8884d8",
      dataKey: "profit",
      chartData: [
        {
          name: "Sun",
          profit: 4000,
        },
        {
          name: "Mon",
          profit: 3000,
        },
        {
          name: "Tue",
          profit: 2000,
        },
        {
          name: "Wed",
          profit: 2780,
        },
        {
          name: "Thu",
          profit: 1890,
        },
        {
          name: "Fri",
          profit: 2390,
        },
        {
          name: "Sat",
          profit: 3490,
        },
      ],
    };
    
    export const barChartBoxVisit = {
      title: "Total Visit",
      color: "#FF8042",
      dataKey: "visit",
      chartData: [
        {
          name: "Sun",
          visit: 4000,
        },
        {
          name: "Mon",
          visit: 3000,
        },
        {
          name: "Tue",
          visit: 2000,
        },
        {
          name: "Wed",
          visit: 2780,
        },
        {
          name: "Thu",
          visit: 1890,
        },
        {
          name: "Fri",
          visit: 2390,
        },
        {
          name: "Sat",
          visit: 3490,
        },
      ],
    };
    