# Prompts for gathering project material

Open a Claude Code session **in each project folder** and paste the matching prompt.
Each asks for the two things the portfolio needs: **images** and **specific numbers**.

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

## 5. Neuron — VGTransformer, architectural hallucination prevention
`C:\Users\Akshay\Projects\Neuron`

```
I'm building an engineering portfolio website and this project is going on it as
a headline software/ML entry. It's the most conceptually ambitious thing I've
built, so the write-up has to be precise and defensible — a skeptical ML person
will read it.

Write PORTFOLIO.md containing:
1. A 2-sentence summary a smart non-ML reader understands: what the confidence
   channel `c` is, and why abstention-by-architecture differs from
   abstention-by-prompting or a special <unknown> token.
2. Four key facts (label/value): architecture (V-layer / G-layer alternation),
   parameter count, the abstention threshold tau_out, and the headline
   silenced / correct rates on the toy task.
3. Sections:
   - Architecture — what a G-layer (diagonal per-neuron gating) actually does to
     the residual stream, and how `c` propagates layer to layer. Include the math.
   - The load-bearing-silence result — why the silence path has to be the ONLY
     mechanism for unanswerables, and what happened when it wasn't.
   - Experiments — every experiment in this repo with its real numbers: the toy
     task, the GPT-2 VG variant, the guard / false-positive analyses, the CoT and
     dense evals. Pull numbers from the .log files, _perf.csv, and the
     analyze_*.py outputs. Do not round away the failures.
   - Limitations — be blunt. Separate what the toy experiments actually validate
     from what the paper only conjectures. My README already draws that line;
     keep it exactly as strict.
4. What I'd test next to make the claim hold at scale.

IMAGES — this needs figures and the repo has the data for them. Generate into
`portfolio_images/` at >=1200px wide, white background, readable axis labels:
   - An architecture diagram: the V/G layer stack with the `c` channel drawn as a
     separate rail and tau_out at the output. SVG or high-res PNG.
   - A histogram of c_final for answerable vs unanswerable inputs with tau_out
     marked — this is the money figure; it shows the separation.
   - Training curves from the eval logs / losses.
   - A false-positive analysis plot from analyze_fp_final.py / analyze_guard.py.
   - Any ablation as a grouped bar chart.
Caption each figure in one sentence saying what it proves.

Keep PORTFOLIO.md under 800 words. Flag every number you could not source.
```

---

## After you collect these

Tell me which `PORTFOLIO.md` files exist and I'll fold them into `js/data.js`
with their images, matching the style of the existing entries.
