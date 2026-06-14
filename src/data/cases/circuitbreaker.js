export const circuitBreaker = {
  id: "LOG-04",
  title: "⚡ Human Connections vs Circuit Breaker Pattern",
  status: "wondering",
  readTime: "4 min read",
  emoji: "⚡",
  timestamp: "2026-06-15",

  header: {
    badges: [
      { label: "Pattern", value: "Circuit Breaker" },
      { label: "Retries", value: "Exponential" },
      { label: "Mode", value: "Overthinking" }
    ]
  },

  sections: [
    {
      label: "🧩 Investigation",
      content: `Lately I was doing human life analogy with circuit breaker pattern.

And weirdly... it started making sense.

When communication is healthy,
responses are normal,
behavior is predictable,
and both systems remain compatible - the circuit stays closed.

Requests continue.
Conversations continue.
Connection remains active.

When communication is healthy,
the circuit stays closed.

No retries.
No fallback.
No force.

`
    },

    {
      label: "📊 Primary Findings",
      content: `Then something changes.

The downstream service changes behavior.

Responses become delayed.
Availability drops.
Unexpected outputs appear.

Calling service gets confused.

Maybe temporary.
Maybe recoverable.

So retries begin.

Retry 1:
Probably busy.

Retry 2:
Maybe occupied.

Retry 3:
Okay let's do exponential backoff.

Wait.
Retry later.
Reduce request frequency.

But if healthy communication keeps failing -

the circuit opens.

Communication stops.

The circuit did not open because the downstream failed.

It opened because endless retries started degrading the caller.

At some point,

continuous retries start feeling less like connection and more like force.`
    },

    {
      label: "🧾 Final Resolution",
      content: `Then comes fallback.

Not replacement.

Fallback.

Energy returns elsewhere.

Other services.
Other priorities.

And maybe that is why:

Availability matters.

Behavior matters.

Showing up matters.

Because eventually every system decides:

Do I keep retrying?

Or do I protect availability?

Because maybe the most beautiful connections are the ones that do not require force to survive.

Circuit open.

Retries exhausted.

Fallback activated. ⚡`,
      color: "text-slate-100"
    }
  ]
};

