# My notes on THE DESIGN OF EVERYDAY THINGS by DONALD A. NORMAN

## Chapter 5 : Human Error? No, Bad Design 

The chapter argues that what is often blamed as “user error” is actually a failure of design.
It examines why people make errors (slips vs. mistakes), how errors arise in interaction with machines/systems, and what designers can do to reduce them. It also discusses automation issues, reporting/learning from error, and how design should anticipate human behaviour rather than assume perfect operation.

### Why errors occur?

**Humans have limitations:** attention lapses, memory limits, distraction, fatigue.

Machines & systems often require people to act in unnatural, non-intuitive ways; when the mental model of the human and machine diverges, errors are more likely.

Investigations of accidents often stop at “human error” without exploring deeper root causes which is design, system architecture, organisational issues.

### Types of errors: **Slips** vs **Mistakes**

**SLIPS:**
The user’s intention is correct, but the execution is wrong _(e.g., pushing the wrong button, mis-clicking)_

There are 6 sub-types:

**a. Capture Errors:**
A more frequent or well-practiced activity “captures” your attention and overrides the intended one.
You start doing the correct sequence but drift into another familiar pattern.
**Example:** You intend to drive to the store but end up on your usual route to work instead.
Happens because routine behavior is executed automatically unless actively monitored.

**b. Description Similarity Errors:**
You act on an item that looks or sounds like the correct one.
**Example:** Pouring orange juice into cereal instead of milk because both are in similar cartons, or clicking the wrong icon because two buttons look alike.
**Design takeaway:** Reduce visual similarity or increase distinctiveness between possible targets.

**c. Mode Errors:**
Occur when a system has multiple modes _(states in which the same control does different things)._
The user performs an action that’s appropriate for one mode but the system is in another.
**Example:** Pressing “Delete” thinking you’re deleting text, but the computer is in “command mode” and deletes the entire file.
**Design takeaway:** Minimize modes, or make mode changes extremely visible _(feedback, color change, confirmation)._

**d. Loss-of-Activation Errors _(memory-lapse slips)_:**
You forget what you were doing or why, the intention fades before completion.
**Example:** Walking into a room and forgetting what you came for.
**Design takeaway:** Provide reminders or cues so users can recover context _(e.g., “Are you sure you want to quit without saving?”)._

**e. Data-driven Errors:**
External data triggers the wrong behavior.
**Example:** Typing your phone number instead of a PIN because you’re thinking about it.
**Design takeaway:** Separate contexts or inputs clearly to prevent interference.

**f. Associative activation / “habit” slips:**
Similar to capture errors but triggered by associative thoughts rather than repetition.
**Example:** Saying “You too” when a waiter says “Enjoy your meal.”
**Design takeaway:** Design interactions so automatic responses don’t cause major harm.

**MISTAKES:** 
The goal or the plan is wrong (i.e., incorrect intention). The user believes they are doing the right thing, but their model is flawed.

There are 3 types:

**a. Rule-based mistakes:**
You have a good mental model and know rules, but apply the wrong one or apply it incorrectly.
Often occurs when an unusual situation looks similar to a familiar one.
**Example:** A pilot applying a takeoff procedure during landing because cues looked similar.
**Design takeaway:** Make context and state differences obvious, provide feedback about mode or conditions.

**b. Knowledge-based mistakes:**
You face a new situation with no known rules, so you must reason from first principles — but your reasoning is wrong.
**Example:** Misdiagnosing a computer problem because you misinterpret the symptom.
**Design takeaway:** Provide clear system feedback and conceptual models so users can reason accurately.

**c. Memory-lapse Mistakes:**
Forgetting key information that affects the plan or goal formation.
**Example:** Forgetting a step in a multi-part procedure, or missing an instruction that alters the task.
**Design takeaway:** Reduce dependence on memory _(checklists, prompts, visible status indicators)._

### Design implications & what good design should do
- Design must **anticipate error: ** since humans are fallible, systems should be tolerant, forgiving, and able to recover.
- Provide **clear feedback** and **good conceptual models** so users can detect and correct errors.
- **Automation paradox:** Automation can reduce some human errors, but introduces new ones _(user complacency, loss of vigilance, unexpected system behaviour)_. Norman discusses this challenge.
- Encourage **error reporting and learning** rather than blame: Systems should help uncover root causes rather than punish individuals. The method of “Five Whys” is mentioned _(asking “why?” repeatedly to get to root cause)._
- Provide **resilience engineering**: systems should be robust in the face of error, allow users to intervene, and recover from faults.

> Norman uses examples from domains like aviation, nuclear power, industrial control to show how design failures lead to major accidents. _(e.g., a misdiagnosis at Three Mile Island)_.
> Everyday product examples too: e.g., control panels where wrong button triggers an action, doors that mislead, etc. — showing how “bad design” often underlies what we perceive as user mistakes.

### What are my Key Take-Aways:
- Blaming the user _(“they pressed the wrong button”)_ misses the opportunity to redesign the system to prevent such errors.
- Errors will happen, the question is how design mitigates them: through good feedback, forcing functions, constraints, clear mappings, signifiers, and conceptual models.
- Automation is not a panacea, human-machine collaboration must be designed carefully to maintain awareness, control, and ability to intervene.
- Organisations should build systems of learning from error rather than hiding them. A culture of _“why did this happen?”_ rather than _“who screwed up?”_
- Good design acknowledges human fallibility and builds preventive and corrective measures into the product or system.

### Designing for Error: 

Errors are inevitable — So design must anticipate them, mitigate their effects, and help users recover.
> Norman insists: _“Human error is a misnomer — most accidents are the result of poor design.”_

**a. Error-tolerant design:**
Designers should assume that users will make mistakes and systems will fail occasionally.
**Goal:** prevent error from leading to catastrophe.
**Example:** A car key that cannot be removed unless the vehicle is in “Park.”
**Similar examples:** seat-belt reminder chime, confirmation dialogs before deleting files.

**b. Design strategies for preventing or mitigating error:**
**1. Add constraints:** Make it physically or logically impossible to commit serious errors _(e.g., plug shapes that prevent incorrect insertion)._
**2. Forcing functions:** Interlocks, lock-ins, and lock-outs that guide correct order or prevent unsafe actions.
**3. Confirmation & verification:** Ask users to double-check potentially harmful actions _(“Are you sure you want to delete this file?”)._
**4. Undo and recovery:** Allow users to reverse actions easily _(e.g., “Undo,” “Restore from trash”)._
**5. Feedback & visibility:** Make consequences of actions immediately clear.
**6. Error messages that teach:** Messages should explain what happened, why, and how to fix it — not blame the user.

**c. Fail-safes and safe states:**
Design for “graceful failure”, when things go wrong, the system should go into a safe state.
**Example:** Elevators stop at the nearest floor and open doors in case of malfunction.
**“Fail-silent” vs. “Fail-active”:** better to fail in a way that alerts users than silently produce wrong output.

**d. Redundancy and cross-checks:**
In critical systems _(aviation, nuclear control, medical equipment)_, redundancy ensures one failure doesn’t lead to disaster.
Designers often build “layers of defense”, each layer can catch errors missed by others _(the “Swiss cheese model” of safety)._

### Detecting and Correcting Errors:

**a. Feedback for recovery:**
The best systems make it obvious when an error has occurred and what the user can do about it.
**Example:** Red highlight on incorrect form fields during online signup.
Visual and auditory cues should direct the user’s attention to the problem.

**b. Provide easy recovery paths:**
Undo/Redo functions are the ultimate design for error: they allow experimentation and confidence.
In physical design, reversible actions _(e.g., detachable parts, resettable circuits)_ serve a similar purpose.
> Norman calls this “Designing for reversibility.”

**c. Encouraging exploration:**
When users know they can’t easily break the system, they explore more freely and learn faster.
Error-tolerant design promotes learning and user confidence.

### Automation and New Forms of Error:

**a. The promise and paradox of automation:**
Automation is introduced to reduce human error and workload, but paradoxically it creates new errors:
**- Complacency:** humans lose attention when automation works well.
**- Loss of skill:** over time, operators forget manual procedures.
**- Mode confusion:** users may not realize what mode the system is in or when control shifts.
**- Automation surprise:** the system acts unexpectedly, and humans don’t understand why.

> Examples
> Airplane autopilot systems: pilots become “monitors” instead of “controllers.” When an emergency occurs, they must suddenly re-engage — often too late.
> Cars with adaptive cruise control or auto-brake: drivers over-trust the system, delaying reaction time.
> Industrial control rooms: operators misinterpret automatic alarms due to information overload.

**c. Design implications:**
**Keep humans in the loop:** automation should assist, not replace, human judgment.
Provide continuous situational awareness, the user should always know the system’s state and what it’s doing.
Use **transparency** in automation: show when control shifts and what the machine’s logic is.
Include manual overrides and training modes so operators retain skills.

### Resilience Engineering — Designing Robust Systems

**a. Resilience:** 
The ability of a system to adapt, recover, and continue functioning after failure.
Focus is not on preventing every possible error, but ensuring the system can bounce back gracefully.

**b. Principles of resilient design:**

**Anticipate** - foresee likely failure modes and design warnings or interlocks.
**Monitor** - track system state and user actions to catch anomalies early.
**Respond** - allow users or systems to correct problems quickly.
**Learn** - incorporate lessons from past failures to improve future performance.

**c. Making systems error-tolerant:**

_Examples:_
**Airplane design:** multiple redundant controls and autopilot layers.
**Power grids:** built with parallel lines and backup generators.
**Software:** autosave, version history, recovery mode.
**The goal:** “human + machine” teamwork, where each compensates for the other’s weaknesses.

**d. Error recovery loops:**

After error detection > provide feedback > user interprets > corrects > feedback confirms fix.
Norman calls this a continuous **“evaluation–execution”** cycle. Good design keeps this loop fast and visible.

### Organizational Responses to Error

**a. Blame culture vs learning culture:**
Many industries _(especially healthcare, aviation, manufacturing)_ have historically blamed individuals for errors _(“operator error”)._
Norman argues for a **“learning culture”** 
_instead:_
**Investigate** why the system allowed the error.
**Improve design, procedures, and training** rather than punishing the user.
**Encourage open error reporting** , without fear of reprisal.

**b. Root cause analysis:**
A practical tool: The **“Five Whys.”**
Ask “why?” repeatedly (≈5 times) until reaching the fundamental cause.

_Example:_
Why did the system crash? → User pressed wrong switch.
Why was the switch pressed? → It looked like the other control.
Why do they look the same? → Poor labeling.
Why poor labeling? → No design review process.
Why no review process? → Organizational oversight.
The true cause isn’t “human error” — it’s systemic.

**c. Institutional learning:**
Each error should become a data point for redesign, not a record of blame.
Industries with strong safety cultures (like aviation) thrive because they study error instead of hiding it.

***Norman: “The best organizations treat errors as opportunities for learning.”***

