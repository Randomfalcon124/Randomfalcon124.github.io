# Prompts for gathering project material

Open a Claude Code session **in each project folder** and paste the matching prompt.
Each one asks for the two things the portfolio needs: **images** and **specific numbers**.

Paste the answers back into the portfolio session, or save them as
`<project>/PORTFOLIO.md` and tell me where to find them.

---

## Universal preamble (already included in each prompt below)

> I'm building an engineering portfolio website. I need a write-up of this project
> plus images. Be concrete and honest — include numbers, failures, and what didn't
> work. Don't invent anything; if you don't know a number, say "unknown".

---

## 1. NannaDemo — autonomous house-mapping / window-counting robot
`C:\Users\Akshay\Projects\NannaDemo`

```
I'm building an engineering portfolio website and this project will be one entry.

Write me a PORTFOLIO.md in this repo containing:
1. A 2-sentence summary a recruiter would understand (no jargon in sentence 1).
2. Four "key facts" as label/value pairs — e.g. compute platform, SLAM stack,
   exploration strategy, best measured result. Real numbers only.
3. Four sections of 3-5 sentences each: Perception, Navigation & exploration,
   Safety/autonomy architecture, What failed and how I fixed it. Cite specific
   files and specific numbers (map sizes, loop rates, success rates, run times).
4. Anything measurable: window-count accuracy vs ground truth, area covered,
   time per run, localization drift, number of sessions a map survived.

Then find me IMAGES. Search the repo for the most portfolio-worthy visuals:
RTAB-Map maps, costmaps, frontier-exploration screenshots, annotated window
detections, the robot itself, RViz captures. Rank the top 8 by how well they'd
read on a website (a stranger should see what the robot did). Copy them into
`portfolio_images/` with descriptive filenames and write a caption for each in
PORTFOLIO.md. If a good visual doesn't exist but the data does, GENERATE it —
e.g. render the saved map to PNG, or make a montage of detected windows.

Keep PORTFOLIO.md under 700 words.
```

---

## 2. Protein — de novo CO₂-fixing enzyme design
`C:\Users\Akshay\Projects\Protein`

```
I'm building an engineering portfolio website and this project will be one entry.

Write me a PORTFOLIO.md containing:
1. A 2-sentence summary that a non-biologist understands (why CO₂ → solid carbon
   matters, what the design loop is).
2. Four key facts (label/value): scaffold protein, best AF3 confidence, the
   Fe–Fe distance achieved, the QM method + binding energy.
3. Sections: Design loop (script → AlphaFold3 → geometry scoring → QM), Results
   by generation (gen3 → gen6 numbers), QM validation and why the xTB number is
   untrustworthy, KMC nanotube-growth simulation and its 0% completion result,
   What I'd do next / the costed wet-lab ladder.
4. Be explicit that this is in-silico only with no wet-lab validation.

This project has NO images, which is the main gap. Please GENERATE figures:
- Render the gen6b AlphaFold3 .cif model to PNG (PyMOL or py3Dmol + matplotlib),
  ideally one overview cartoon and one close-up of the diiron site with the
  Fe–Fe distance labeled.
- Plot the gen3→gen6 confidence progression (pTM/ipTM/ranking) from the JSON.
- Plot the KMC results from cnt_pipeline/output/sim_results/*.json —
  ring-count distribution and defect fraction over 200 trials.
- A simple block diagram of the design loop.
Save them to `portfolio_images/` at >=1200px on the long edge, white or
transparent background, and caption each in PORTFOLIO.md.

Keep PORTFOLIO.md under 700 words. Flag anything you're unsure about.
```

---

## 3. PickleBallDrone — pickleball ball-boy robot
`C:\Users\Akshay\Downloads\PickleBallDrone` (and the GitHub repo)

```
I'm building an engineering portfolio website and this project is already an
entry — I want to deepen it with real numbers and images.

Write me a PORTFOLIO.md containing:
1. Measured numbers for each subsystem, pulled from the code and any logs:
   ball-detection frame rate and range limits, AprilTag localization rate and
   accuracy, the drag coefficients I settled on (horizontal vs vertical), the
   Euler-integration step count and horizon, P-controller gains, motor free speed.
2. A comparison table of every detection method I tried (HSV, RGB contour,
   circularity, depth discontinuity, YOLO) and every localization method
   (global-shutter VSLAM, T265, optical flow, AprilTag) — with why each lost.
3. The current failure modes and what's next (heading control).
4. Point me at the 4 key files named in the README and say what each does.

IMAGES: extract the best frames from the demo videos and .bag files in this
folder — the three-pane ball-detection view (depth / color / HSV mask), the
trajectory-prediction plot with the 20 cm target zone, the robot driving to the
AprilTag. Save stills to `portfolio_images/` at >=1200px wide. Also generate a
clean matplotlib plot of a predicted vs actual ball trajectory if the data exists.
Caption each image.

Keep it under 700 words. Don't invent numbers — mark unknowns as "unknown".
```

---

## 4. Fusion 360 API scripts
`C:\Users\Akshay\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\Scripts`

```
I'm building an engineering portfolio website and my Fusion 360 automation
scripts are one entry.

Inventory every script in this folder. For each: name, what it generates, how
many lines, which Fusion API areas it uses (sketches, features, threads,
chamfers, component transforms), and whether it currently works.

Then write PORTFOLIO.md with:
1. A 2-sentence summary of why I wrote these (speeding up FTC CAD workflow).
2. Key facts: number of scripts, the most-used one, time saved per part (estimate
   and label it as an estimate).
3. A section per notable script — the REV extrusion generator, the M3 screw
   generator, the duplicate-to-locations tool — covering what problem it solved
   and what I learned about the API.

IMAGES: I need before/after visuals. For each script, produce a screenshot of a
part it generates (run it in Fusion if you can guide me, or find existing
renders in my Downloads folder — search for files matching the part names).
If you can't produce screenshots, write me a numbered list of exactly which
screenshots to take and from what camera angle.

Under 500 words.
```

---

## 5. ThrustVector — ArduPilot quadcopter *(currently off the site)*
`C:\Users\Akshay\Projects\ThrustVector`

```
I'm building an engineering portfolio website. This project is on hold, so I
want an honest snapshot of it, not a sales pitch.

Write PORTFOLIO.md with:
1. What the build is and where it actually stands (be blunt about what's done
   vs planned).
2. Key facts: flight controller, target frame, ESC protocol, firmware target.
3. The hardware-verification work in docs/HARDWARE.md — summarize the real
   engineering finding there: which specs I verified against sources, and the
   three constraints that changed the plan (Vx2 solder bridge, UART DMA
   placement, no Lua scripting on 1 MB flash).
4. What's in firmware/ and sim/ and whether it runs.

IMAGES: any wiring diagrams, sim plots, or CAD in the repo. If none exist,
generate: a wiring/power-budget block diagram (motors, BECs, FC, GPS, telemetry)
as an SVG, and a timer-group/output-mapping table rendered as a clean image.
Save to `portfolio_images/`.

Under 500 words. Say clearly if this isn't portfolio-ready yet.
```

---

## 6. dxf2drawing / step2drawing *(currently off the site)*
`C:\Users\Akshay\Projects\DXFtoDrawing`

```
I'm building an engineering portfolio website and these two CLIs are a candidate
entry.

Write PORTFOLIO.md with:
1. The problem in two sentences: what Fusion 360's drawing workspace can't do
   and why the API can't fix it in-app.
2. Key facts: supported inputs, dimensioning strategies, sheet sizes, tolerance
   standard applied, test coverage.
3. How the auto-dimensioning actually works — the algorithm for choosing which
   features to dimension and where to place them without collisions. This is the
   interesting part; go into detail.
4. Limitations and what breaks.

IMAGES — this project's whole value is visual, so this matters most:
Run both CLIs on the examples in `examples/` and save the resulting PDFs, then
rasterize page 1 of each to PNG at 150 dpi into `portfolio_images/`. I want at
least: one flat laser-cut part with a hole table, one ordinate-dimensioned part,
and one tube two-view drawing with the hidden bore. Also produce a side-by-side
"input DXF vs generated drawing" image for one part. Caption each.

Under 600 words.
```

---

## 7. Neuron
`C:\Users\Akshay\Projects\Neuron`

```
I'm building an engineering portfolio website. Tell me first whether this
project is worth including — be honest, I'd rather cut it than pad the site.

If yes, write PORTFOLIO.md: 2-sentence summary, 4 key facts with real numbers,
3 sections (approach, results, what I learned), and a list of the best 4-6
images or plots in the repo copied into `portfolio_images/`. Generate plots from
any saved results/metrics if none exist.

If no, tell me in one paragraph why not and what would make it portfolio-worthy.

Under 500 words.
```

---

## 8. Trading
`C:\Users\Akshay\Projects\Trading`

```
I'm building an engineering portfolio website. Tell me first whether this
belongs on it — this is a personal-finance-adjacent project and I want an honest
read on whether it shows engineering skill or just looks like gambling.

If it's worth including, write PORTFOLIO.md covering: what the system does, the
data pipeline, the backtest methodology, and — most importantly — how I guarded
against look-ahead bias, survivorship bias, and overfitting. Include real
performance numbers with the caveats attached, or say plainly that results
aren't trustworthy yet.

IMAGES: equity curves, drawdown plots, and any out-of-sample vs in-sample
comparison. Generate them from saved results if they don't exist.
Under 600 words. Do not overstate performance.
```

---

## After you collect these

Tell me which `PORTFOLIO.md` files exist and I'll fold them into `js/data.js`
with their images, matching the style of the existing entries.
