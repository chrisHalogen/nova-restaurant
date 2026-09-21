# NOVA Restaurant theme

> **Process playbook:** `/Users/admin/Documents/Codebases/nova_memory/Process.md` records every step of
> this build so it can be reused on other projects. **Update it after every step of work**
> (add or tick the step, method, what was done, tools, outputs, lessons, `status::`, `current_step`).

Project memory lives in the Obsidian vault at `/Users/admin/Documents/Codebases/nova_memory`.
Follow its `_meta/Memory Protocol.md` on every task:

- **Before:** read `Home.md`, `80 Plans/Open work.md`, and the notes the task touches
  (`00 Overview/`, `10 Theme/`, `90 Gotchas/`, `95 Decisions/`).
- **During:** record client answers and requirements in `00 Overview/`, traps in `90 Gotchas/`,
  decisions in `95 Decisions/`, plans in `80 Plans/` (templates in `_templates/`). Wire plans with
  `/wire-plan` before building.
- **After:** update `journal/YYYY-MM-DD.md`, `70 Ops/Change log.md` / `Deploy log.md`,
  `Open work.md`, bump `updated:` on changed notes, then commit the vault.

Where a note contradicts the code, the code wins: fix the note. Never write secrets into the vault.

## Standing rules (owner)

- **All coding follows the `ponytail` skill** (2026-09-21): climb the ladder before writing code
  (does it need to exist, is it already here, does the platform do it, can it be one line), keep the
  shortest working diff, fix root causes, and mark deliberate shortcuts with a `ponytail:` comment.
  A direct request from the owner still wins over the ladder.

- **No em dashes and no emojis, anywhere in this project**: code, comments, UI copy, content,
  commit messages, vault notes, documents and PDFs. Use commas, colons, full stops or brackets
  instead of em dashes. Use text or inline SVG icons instead of emojis.
