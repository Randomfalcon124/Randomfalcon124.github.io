// Single source for every resume variant.
// Bullets: a plain string appears in every variant; { t, v: ['aero'] } appears only in the listed variants.

window.RESUME = {
  contact: {
    name: 'Akshay Patil',
    items: ['Dallas, TX', 'US Citizen', '(469) 594-5077', 'apatil433@gatech.edu', 'linkedin.com/in/akshaypatil08', 'randomfalcon124.github.io'],
  },

  entries: {
    gt: {
      org: 'Georgia Institute of Technology', where: 'Atlanta, GA', dates: 'May 2029',
      role: 'Bachelor of Science in Aerospace Engineering | Sophomore | GPA: 4.00',
      coursework: {
        aero: 'AE 1601 Intro to Aerospace Engineering, COE 2001 Statics, MSE 2001 Materials, MATH 2551 Multivariable Calculus, ME 1670 SolidWorks, CS 1371 MATLAB',
        robotics: 'CS 1371 MATLAB, MATH 2551 Multivariable Calculus, COE 2001 Statics, ME 1670 SolidWorks, AE 1601 Intro to Aerospace Engineering, MSE 2001 Materials',
      },
    },
    townview: {
      org: 'School of Science and Engineering at Townview', where: 'Dallas, TX', dates: 'Aug 2022 – May 2026',
      line: '3.97 Unweighted GPA | Rank 2 | 1600 SAT | National Merit Scholar | FIRST Alum',
    },

    salvo: {
      org: 'YC-Backed Stealth Startup', role: 'Hardware Intern', dates: 'Aug 2026 – Present',
      bullets: [
        'Building the world\'s fastest RC interceptor aircraft',
        'Designed the nose cone and avionics bay, replacing adhesive mounting so the airframe can be built at scale',
        'Designed 3D printed rib alignment jigs and built two RC test aircraft on them, drilling, finishing, and epoxy bonding carbon fiber structure',
        'Responsible engineer for the next two programs: a subscale supersonic demonstrator and a fully 3D printed jet interceptor',
      ],
    },

    hardpoint: {
      org: 'Hardpoint Robotics', role: 'Co-Founder', dates: 'Jun 2026 – Present',
      bullets: [
        'Break-even startup building NDAA-compliant development UAVs for customers barred from foreign hardware',
        'Modeled a 500 mm, 4 kg max takeoff weight quadcopter in CAD with 3D printed CF-Nylon parts, sized for 12.7 min endurance with a 410 g Jetson and stereo camera payload',
        'Working with North American vendors to manufacture carbon fiber structures and source compliant components, negotiating pricing and delivery timelines',
      ],
    },

    swyft: {
      org: 'SWYFT Robotics', role: 'Engineering Design Intern', dates: 'May 2025 – May 2026',
      bullets: [
        'SWYFT sells competition drivetrain and structural parts to FIRST Tech Challenge and FIRST Robotics Competition teams',
        'Designed sprockets, gears, and pulleys for competition loads, generating $10,000 in revenue',
        { t: 'Created a modular robot cart for FRC teams with a detachable programming station, designed for extrusion and fiber laser cutting', v: ['aero'] },
      ],
    },

    ivalab: {
      org: 'IVALab, Georgia Tech', role: 'Undergraduate Researcher', dates: 'Sep 2026 – Present',
      bullets: [
        'The lab works on navigation for robots that have to move through crowds of people',
        'Developing navigation algorithms that mix learned policies with classical planners',
        'Benchmarking them against each other in the Arena simulator',
      ],
    },

    vip: {
      org: 'Hypersonics VIP, Georgia Tech', role: 'Data and Communications Team', dates: 'Aug 2026 – Present',
      bullets: [
        'Building a sonic fatigue test facility, where acoustic loading is used to find how structures fail under sustained high-intensity sound',
        'Designing the sensor package that measures pressure, temperature, and airflow inside the facility',
        { t: 'Developing parabolic mirrors to generate a uniform sound field across the test section', v: ['aero'] },
      ],
    },

    gtxr: {
      org: 'Georgia Tech Experimental Rocketry', role: 'Externals Team', dates: 'Aug 2026 – Present',
      bullets: [
        'The externals team builds the rocket\'s prepreg carbon fiber structure in house',
        'Designing a fin mounting jig that precisely locates fins after they have been wrapped in carbon fiber and their exact dimensions are no longer known, and holds fin cant to within a tenth of a degree',
        { t: 'Devising a way to measure each fin angle to that tolerance, with a mini carbon fiber fin can going to a third party for dimensioning to validate the jig', v: ['aero'] },
      ],
    },
    yjsp: {
      org: 'Yellow Jacket Space Program', role: 'Turbomachinery, Engine Development', dates: 'Sep 2026 – Present',
      bullets: [
        'Pursuing the collegiate liquid propellant altitude record and the Karman line at 100 km',
        'Designing electric pumps and turbopumps so the vehicle can drop the heavy pressurant tanks; drew the GD&T part drawings for the Elytra electric pump',
        'Simulated the Vespula engine\'s LOx injector manifold in STAR-CCM+, showing all 17 injectors run within 1.1% of mean flow and tracing the remaining imbalance to injector ring layout',
      ],
    },

    ftc: {
      org: 'FIRST Tech Challenge Team 7172 (Top 0.1% Worldwide)', role: 'Captain and Lead Designer', dates: 'Sep 2021 – May 2026',
      bullets: [
        'Lead designer on four robots; 2026 FIRST World Championship Finalist Alliance, top 8 of roughly 7,000 teams',
        'Designed mechanisms using linkages, counter-springing, pulley systems, and geartrains',
        'Used industrial arm kinematics to design and build a 6-DoF arm robot that expands from an 18 in cube to 13 ft of reach',
        '24 competition wins (2021 to 2026), plus Inspire, Think, Connect, Innovate, Design, Motivate, and Control awards',
      ],
    },

    bwsi: {
      org: 'Beaver Works Summer Institute at MIT', role: 'UAS-SAR Track', dates: 'Jun 2024 – Aug 2024',
      bullets: [
        'Built a UAV synthetic aperture radar by mounting a PulsON 440 ultra-wideband radar on a DJI F550',
        'Wrote a vectorized Python back projection algorithm that resolved targets even in noisy conditions',
      ],
    },

    pickleball: {
      org: 'Pickleball Ball Boy UAV', role: 'Personal Project', dates: 'May 2025 – Present',
      bullets: [
        { t: 'Building a UAV to catch practice serves, testing the perception and guidance stack first on a Jetson Orin Nano holonomic base', v: ['aero'] },
        { t: 'Benchmarked five ball detection and four localization methods; AprilTag localization was the most accurate by a wide margin', v: ['robotics'] },
        'Split the drag model into horizontal and vertical coefficients, bringing landing prediction inside a 20 cm zone',
      ],
    },

    windows: {
      org: 'Autonomous House-Mapping Robot', role: 'Personal Project', dates: '2025 – Present',
      bullets: [
        'Jetson Orin Nano robot that explores a house with no operator and counts windows, using an MPPI controller, RTAB-Map visual SLAM, and frontier exploration I wrote',
        { t: 'No lidar: obstacles come from monocular depth classified against a fitted ground plane, windows from three open-vocabulary detectors filtered by a vision-language model', v: ['robotics'] },
      ],
    },
  },

  skills: {
    aero: [
      ['CAD and CFD', 'SolidWorks, Fusion 360, Onshape, Autodesk Inventor, GD&T drawings, STAR-CCM+'],
      ['Manufacturing', 'CNC machining, 3D printing (CF-Nylon), carbon fiber, epoxy, jigs and fixtures'],
      ['Programming', 'Python (NumPy, Matplotlib, Pandas, TensorFlow), MATLAB, Java, Git'],
      ['Hardware', 'NVIDIA Jetson, Raspberry Pi, Arduino, REV Control Hub'],
      ['Certifications', 'FAA Part 107 Remote Pilot, Autodesk Certified User (Inventor)'],
    ],
    robotics: [
      ['Robotics', 'ROS 2 (Nav2), RTAB-Map visual SLAM, MPPI control, AprilTag localization'],
      ['Programming', 'Python (NumPy, Pandas, TensorFlow), MATLAB, Java, Git'],
      ['Hardware', 'NVIDIA Jetson, Raspberry Pi, Arduino, REV Control Hub'],
      ['CAD', 'SolidWorks, Fusion 360, Onshape, Autodesk Inventor, 3D printing'],
      ['Certifications', 'FAA Part 107 Remote Pilot, Autodesk Certified User (Inventor)'],
    ],
  },

  // Section order and membership per variant. Add a variant by adding a block here.
  variants: {
    aero: [
      ['Education', ['gt', 'townview']],
      ['Experience', ['salvo', 'hardpoint', 'swyft']],
      ['Research and Clubs', ['vip', 'yjsp', 'ftc', 'bwsi']],
      ['Skills', 'skills'],
    ],
    robotics: [
      ['Education', ['gt', 'townview']],
      ['Experience', ['salvo', 'hardpoint', 'swyft']],
      ['Projects', ['windows', 'pickleball']],
      ['Research and Clubs', ['vip', 'ftc']],
      ['Skills', 'skills'],
    ],
  },
};
