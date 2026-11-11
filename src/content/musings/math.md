---
title: "Under construction, coming soon!"
description: "Tempor incididunt with equations"
pubDate: 2026-09-07
tags: ["placeholder", "math"]
draft: false
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. This note exists to test the math pipeline. Inline expressions such as $f_\theta(x)$, $x \in \mathbb{R}^d$, and $O(n \log n)$ should render at build time without any client-side JavaScript.

A regularised least-squares objective is a useful display test:

$$
\mathcal{L}(\theta)
= \frac{1}{N} \sum_{i=1}^{N} \left( y_i - f_\theta(x_i) \right)^2
+ \lambda \lVert \theta \rVert_2^2
$$

The gradient and update rule can be aligned:

$$
\begin{aligned}
\nabla_\theta \mathcal{L}
&= \frac{2}{N} \sum_{i=1}^{N}
\left( f_\theta(x_i) - y_i \right)
\nabla_\theta f_\theta(x_i)
+ 2\lambda\theta, \\
\theta_{t+1}
&= \theta_t - \eta \nabla_\theta \mathcal{L}.
\end{aligned}
$$

Matrices work too:

$$
A =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix},
\qquad
\mathbb{E}[X] = \sum_{x} x \, p(x).
$$

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. The rest of the note is ordinary prose so you can judge the distance between a paragraph and a display equation.
