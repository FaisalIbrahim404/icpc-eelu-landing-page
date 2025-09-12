# Learning Log

---
title: Learning Log
description: A reusable, actionable log to track technologies, libraries, and topics to learn for this repository.
lastUpdated: 2025-09-12
owner: [FaisalIbrahim404]
---

## How to Use This File

- **Purpose:**  
  Track technologies, libraries, and concepts to learn, experiment with, or revisit for this project.
- **When to add entries:**  
  - New tech/libraries you want to explore  
  - Knowledge gaps or blockers  
  - Experimentation plans  
  - Resources to review  
  - Progress updates
- **How to write entries:**  
  - Keep each entry concise and actionable  
  - Use checklists for steps and acceptance criteria  
  - Use the provided templates for consistency
- **Tags:**  
  Use hashtags to group topics (examples: #frontend, #backend, #testing, #infra, #productivity)
- **Priorities:**  
  - **P1:** Critical for current goals  
  - **P2:** Important, but not urgent  
  - **P3:** Nice to have / long-term
- **Status:**  
  - Planned  
  - In Progress  
  - Paused  
  - Done
- **Timeboxing:**  
  - Break learning tasks into slices of 60–120 minutes
- **Proposing additions (via PR):**  
  - [ ] Use the templates  
  - [ ] Add meaningful tags, priority, and status  
  - [ ] Link related topics/resources  
  - [ ] Include acceptance criteria

---

## Templates (copy-paste blocks)

**Topic/Library Card**

**Title:**  
**Why it matters:**  
**TL;DR:**  
**Status:**  
**Priority:**  
**Tags:**  
**Prerequisites:**  
**Key concepts:**  
-  
**First steps:**  
- [ ]  
- [ ]  
**Deep dive:**  
- [ ]  
- [ ]  
**Deliverable:**  
**Timebox:**  
**Risks:**  
**Related:**  
<details>
<summary>Notes</summary>

</details>  
**Acceptance criteria:**  
- [ ]  
- [ ]  


**Resource**

| Title | Type | Link | Summary | Difficulty | Est. time | Key takeaways | How I’ll validate learning | Related topics |
|-------|------|------|---------|------------|-----------|---------------|---------------------------|---------------|
|       |      |      |         |            |           |               |                           |               |


**Resource (copy-paste template):**

- **Title:**  
- **Type:**  
- **Link:**  
- **Summary:**  
- **Difficulty:**  
- **Est. time:**  
- **Key takeaways:**  
- **How I’ll validate learning:**  
- **Related topics:**  


**Experiment Plan**

**Hypothesis:**  
**Setup:**  
**Steps:**  
- [ ]  
- [ ]  
**Success criteria:**  
- [ ]  
- [ ]  
**Rollback plan:**  
**Notes:**  
**Follow-ups:**  


**Progress Log Entry**

**Date:**  
**What I did:**  
**Time spent:**  
**Outcome:**  
**Next step:**  


**Glossary Entry**

**Term:**  
**Definition:**  
**Example:**  
**Related:**  


**Now/Next/Later**

**Now:**  
-  
-  
-  

**Next:**  
-  
-  
-  

**Later:**  
-  
-  
-  

---

## Examples

### Topic/Library Cards

**Title:** OGL  
**Why it matters:** Lightweight WebGL framework for modern 3D graphics in the browser.  
**TL;DR:** Explore OGL to render custom 3D scenes with minimal boilerplate.  
**Status:** In Progress  
**Priority:** P1  
**Tags:** #frontend #3d #graphics  
**Prerequisites:** Basic WebGL, JavaScript ES6  
**Key concepts:**  
- Scene graph  
- Meshes and geometry  
- Shaders (GLSL)  
- Render loop  
**First steps:**  
- [x] Skim OGL [docs](https://oframe.github.io/ogl/)  
- [x] Run a hello-world spinning cube  
- [ ] Review OGL starter examples  
**Deep dive:**  
- [ ] Custom shaders  
- [ ] Integrate with UI (React)  
**Deliverable:** Minimal interactive 3D demo with OGL  
**Timebox:** 2 x 90min  
**Risks:** WebGL API quirks, browser compatibility  
**Related:** Three.js, regl  
<details>
<summary>Notes</summary>

OGL focuses on simplicity and performance; less bloat than Three.js.  
</details>  
**Acceptance criteria:**  
- [x] Demo runs in browser  
- [ ] Custom shader renders a basic effect  
- [ ] Code is documented and committed  


**Title:** GSAP (GreenSock Animation Platform)  
**Why it matters:** Robust JS animation library for performant, timeline-based animations.  
**TL;DR:** Use GSAP to animate DOM and canvas elements with precise control.  
**Status:** Planned  
**Priority:** P2  
**Tags:** #frontend #animation #productivity  
**Prerequisites:** JavaScript basics  
**Key concepts:**  
- Timelines  
- Tweens  
- Easing functions  
**First steps:**  
- [ ] Read core GSAP [guide](https://greensock.com/gsap/)  
- [ ] Implement a basic fade/slide animation  
**Deep dive:**  
- [ ] Animate OGL canvas properties  
- [ ] Sequence multiple animations  
**Deliverable:** Animated UI section  
**Timebox:** 1 x 60min  
**Risks:** Integration with canvas/webGL  
**Related:** Framer Motion, anime.js  
<details>
<summary>Notes</summary>

GSAP is widely used for web animation, known for reliability and ecosystem.  
</details>  
**Acceptance criteria:**  
- [ ] Animation runs smoothly  
- [ ] Timeline sequencing works  


**Title:** Schema Validation  
**Why it matters:** Ensures data integrity and prevents bugs via structured validation.  
**TL;DR:** Try out schema validation libraries for both frontend and backend data.  
**Status:** Planned  
**Priority:** P3  
**Tags:** #backend #validation  
**Prerequisites:** JSON, API basics  
**Key concepts:**  
- Type definitions  
- Runtime validation  
- Error handling  
**First steps:**  
- [ ] Compare Zod vs. Yup  
- [ ] Validate a simple user input form  
**Deep dive:**  
- [ ] Integrate with API layer  
**Deliverable:** Validated endpoint or form  
**Timebox:** 1 x 90min  
**Risks:** Library API churn  
**Related:** io-ts, class-validator  
<details>
<summary>Notes</summary>

Choose a library that fits TypeScript usage and team preferences.  
</details>  
**Acceptance criteria:**  
- [ ] Validation catches bad input  
- [ ] Errors are user-friendly  


---

### Resource Example

| Title        | Type    | Link                  | Summary                                      | Difficulty | Est. time | Key takeaways                       | How I’ll validate learning           | Related topics         |
|--------------|---------|-----------------------|----------------------------------------------|------------|-----------|-------------------------------------|--------------------------------------|-----------------------|
| OGL Docs     | Docs    | https://oframe.github.io/ogl/ | Official OGL documentation and API reference | Beginner   | 45 min    | Core concepts, API usage, examples  | Build & run hello-world scene        | OGL, WebGL            |

- **Title:** GSAP Core Guide  
- **Type:** Docs  
- **Link:** https://greensock.com/gsap/  
- **Summary:** Official intro and API docs for GSAP.  
- **Difficulty:** Beginner  
- **Est. time:** 30 min  
- **Key takeaways:** Main concepts, common patterns  
- **How I’ll validate learning:** Create a simple element animation  
- **Related topics:** GSAP, animation, UI  


---

### Experiment Plan Example

**Hypothesis:**  
Integrating OGL with GSAP enables smooth, timeline-driven animations in 3D scenes.

**Setup:**  
OGL starter project, GSAP installed via npm.

**Steps:**  
- [x] Create a basic OGL scene with a cube  
- [ ] Use GSAP to animate the cube’s rotation  
- [ ] Sequence another property (e.g., position or color)

**Success criteria:**  
- [ ] Cube rotation animates smoothly via GSAP  
- [ ] No performance hitches

**Rollback plan:**  
Revert to static OGL scene if GSAP integration fails.

**Notes:**  
Test in latest Chrome and Firefox.

**Follow-ups:**  
Explore syncing GSAP timeline with user input.


---

### Progress Log

**Date:** 2025-09-10  
**What I did:** Ran OGL hello-world cube example.  
**Time spent:** 45 min  
**Outcome:** Cube renders and spins; docs clear.  
**Next step:** Try custom shader.

**Date:** 2025-09-11  
**What I did:** Compared GSAP vs. anime.js for timeline animation.  
**Time spent:** 30 min  
**Outcome:** GSAP has better docs and TypeScript support.  
**Next step:** Integrate GSAP with OGL canvas.

**Date:** 2025-09-12  
**What I did:** Sketched Experiment Plan for OGL + GSAP.  
**Time spent:** 20 min  
**Outcome:** Ready to implement integration.  
**Next step:** Animate OGL scene with GSAP.

**Date:** 2025-09-12  
**What I did:** Read OGL docs on custom shaders.  
**Time spent:** 25 min  
**Outcome:** Understood basic shader structure.  
**Next step:** Write a custom fragment shader.

---

### Glossary

**Term:** OGL  
**Definition:** Lightweight JavaScript library for building 3D scenes in the browser using WebGL.  
**Example:** Rendering a spinning cube with custom shaders.  
**Related:** Three.js, WebGL

**Term:** GSAP  
**Definition:** JavaScript animation framework for creating performant, timeline-based animations.  
**Example:** Fading in and sliding a UI panel on page load.  
**Related:** Framer Motion, anime.js

---

### Now/Next/Later

**Now:**  
- Complete OGL hello-world and start custom shader work  
- Build Experiment Plan for OGL + GSAP integration  
- Review GSAP core docs

**Next:**  
- Animate 3D scene properties with GSAP  
- Try schema validation (Zod/Yup) in data pipeline  
- Document learnings and best practices

**Later:**  
- Explore advanced OGL features (post-processing, lighting)  
- Integrate schema validation with backend API  
- Benchmark animation performance and optimize
