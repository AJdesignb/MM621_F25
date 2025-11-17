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

