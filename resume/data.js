// Single source for every resume variant.
// Bullets: a plain string appears in every variant; { t, v: ['aero'] } appears only in the listed variants.

window.RESUME = {
  contact: {
    name: 'Akshay Patil',
    items: ['(469) 594-5077', 'akshaypat08@gmail.com', 'linkedin.com/in/akshaypatil08', 'randomfalcon124.github.io'],
  },

  entries: {
    gt: {
      org: 'Georgia Institute of Technology', where: 'Atlanta, GA', dates: 'August 2026 – May 2029',
      role: 'Bachelor of Science in Aerospace Engineering',
      coursework: {
        aero: 'AE 1601 Aerospace Engineering, COE 2001 Statics, MSE 2001 Materials, MATH 2551 Multivariable Calculus, ME 1670 Graphics, CS 1371 Computing',
        robotics: 'CS 1371 Computing, MATH 2551 Multivariable Calculus, COE 2001 Statics, ME 1670 Graphics, AE 1601 Aerospace Engineering, MSE 2001 Materials',
      },
    },
    townview: {
      org: 'School of Science and Engineering at Townview', where: 'Dallas, TX', dates: 'August 2022 – May 2026',
      line: '3.97 Unweighted GPA | Rank 2 | 1600 SAT | National Merit Scholar | NASA High School Aerospace Scholar',
    },

    salvo: {
      org: 'Salvo Dynamics', role: 'Design Engineer', dates: 'August 2026 – Present',
      bullets: [
        'Salvo builds small interceptor aircraft meant to fly out and bring down hostile drones, and is separately building an RC jet to break the speed of sound',
        'Turning optimized aerobody models into load-bearing structures in CAD, and laying out the avionics that go inside them',
        'Designing a 3D printed airframe for testing, plus the assembly jigs the production aircraft are built on',
      ],
    },

    hardpoint: {
      org: 'Hardpoint Robotics', role: 'Co-Founder', dates: 'June 2026 – Present',
      bullets: [
        'Hardpoint builds NDAA-compliant development UAVs, aircraft for customers who are not allowed to fly foreign-sourced hardware',
        'I own the airframe: CAD, 3D printed CF-Nylon parts, and carbon fiber structures made with outside vendors',
        'Designing around sourcing as a hard constraint, since every part has to be compliant and purchasable, so vendor lead times shape the design as much as the loads do',
      ],
    },

    swyft: {
      org: 'SWYFT Robotics', role: 'Engineering Design Intern', dates: 'May 2025 – May 2026',
      bullets: [
        'SWYFT sells competition drivetrain and structural parts to FIRST Tech Challenge and FIRST Robotics Competition teams',
        'Designed sprockets, gears, and pulleys that hold up under competition loads at a price teams can afford',
        { t: 'Designed a modular robot cart for FRC teams with a detachable programming station, drawn for extrusion and fiber laser cutting', v: ['aero'] },
      ],
    },

    ivalab: {
      org: 'IVALab, Georgia Tech', role: 'Undergraduate Researcher', dates: 'September 2026 – Present',
      bullets: [
        'The lab works on navigation for robots that have to move through crowds of people',
        'Developing navigation algorithms that mix learned policies with classical planners',
        'Benchmarking them against each other in the Arena simulator',
      ],
    },

    vip: {
      org: 'Hypersonics VIP, Georgia Tech', role: 'Data and Communications Team', dates: 'August 2026 – Present',
      bullets: [
        'The team is standing up a sonic fatigue test facility, where acoustic loading is used to find how structures fail under sustained high-intensity sound',
        'Building the sensor package that measures pressure, temperature, and airflow inside the facility',
        { t: 'Developing parabolic mirrors to generate a uniform sound field across the test section', v: ['aero'] },
      ],
    },

    gtxr: {
      org: 'Georgia Tech Experimental Rocketry', role: 'Externals Team', dates: 'August 2026 – Present',
      bullets: [
        'The externals team builds the rocket\'s prepreg carbon fiber structure in house, which I joined to learn composite layup',
        'Designing a fin mounting jig that locates fins on an already wrapped tube whose exact dimensions are no longer known, and holds fin cant to within a tenth of a degree',
        { t: 'Working out how to measure each fin angle to that tolerance, with a mini carbon fiber fin can going to a third party for dimensioning to validate the jig', v: ['aero'] },
      ],
    },
    yjsp: {
      org: 'Yellow Jacket Space Program', role: 'Turbomachinery, Engine Development', dates: 'August 2026 – Present',
      bullets: [
        'The program is going for the collegiate liquid propellant altitude record and the Karman line at 100 km',
        'Designing electric pumps and turbopumps so the vehicle can drop the large, heavy pressurant tanks a pressure-fed engine needs',
        { t: 'Designing and manufacturing impellers, pump housings, and the surrounding hardware', v: ['aero'] },
      ],
    },

    ftc: {
      org: 'FIRST Tech Challenge Team 7172', role: 'Captain and Lead Designer', dates: 'September 2021 – May 2026',
      bullets: [
        'Lead designer on four robots; 2026 World Championship Finalist Alliance, 19 event wins and 63 awards over five seasons',
        { t: 'Replaced an unreliable game piece transfer with one 5-DoF arm doing both intake and scoring, using worm gearboxes and torsion springs to offload the pivot motor', v: ['aero'] },
        { t: 'Designed a shooter that sorts and fires three balls in 0.2 to 0.5 s using a wedge spindexer and a flywheel on a 200 Hz servo turret', v: ['robotics'] },
      ],
    },

    bwsi: {
      org: 'Beaver Works Summer Institute at MIT', role: 'UAS-SAR Track', dates: 'June 2024 – August 2024',
      bullets: [
        'Built a synthetic aperture radar from a PulsON 440 on a DJI F550 UAV and wrote the NumPy back projection, which resolved four soda cans next to two much brighter retroreflectors',
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
      ['CAD', 'SolidWorks, Fusion 360, Onshape, Autodesk Inventor'],
      ['Manufacturing', '3D printing (CF-Nylon), fiber laser cutting, extrusion, carbon fiber vendor work'],
      ['Programming', 'Python (NumPy, Matplotlib, Pandas, TensorFlow), MATLAB, JavaScript, SQL, Git'],
      ['Hardware', 'NVIDIA Jetson, Raspberry Pi, Arduino, REV Control Hub'],
      ['Certifications', 'FAA Part 107 Remote Pilot, Autodesk Certified User (Inventor)'],
    ],
    robotics: [
      ['Robotics', 'ROS 2 (Nav2), RTAB-Map visual SLAM, MPPI control, AprilTag localization'],
      ['Programming', 'Python (NumPy, Pandas, TensorFlow), MATLAB, JavaScript, SQL, Git'],
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
      ['Research and Clubs', ['vip', 'gtxr', 'yjsp', 'ivalab', 'ftc']],
      ['Skills', 'skills'],
    ],
    robotics: [
      ['Education', ['gt', 'townview']],
      ['Experience', ['hardpoint', 'salvo', 'swyft']],
      ['Projects', ['windows', 'pickleball']],
      ['Research and Clubs', ['ivalab', 'vip', 'ftc']],
      ['Skills', 'skills'],
    ],
  },
};
