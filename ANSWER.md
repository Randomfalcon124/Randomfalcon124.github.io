# Draft answer — "excellence / self-motivated interest"

Photos and full write-ups: **https://randomfalcon124.github.io/**

---

**Pickleball ball boy** — [portfolio](https://randomfalcon124.github.io/#pickleball-robot)
I'm building a UAV that takes off from a pickleball court and catches practice serves, and before buying an airframe I built a holonomic drive base with a Jetson Orin Nano as a cheap teststand for the perception and guidance stack. I benchmarked five ball detection methods and four localization methods against each other rather than guessing, and AprilTag localization came out the most accurate by a wide margin. A single drag coefficient kept overshooting the landing point until I split it into horizontal and vertical, the vertical significantly higher, which puts the prediction inside a 20 cm zone.

**"Phoenix," FTC Power Play** — [portfolio](https://randomfalcon124.github.io/#dual-arm-robot)
Our first robot that season transferred game pieces from an intake extension to a scoring extension, and the handoff was never consistent because of the degrees of freedom involved. Rather than iterate on the transfer again I eliminated it, making one arm both intake and outtake: 5 DoF plus the claw, worm gearboxes on the yaw axis and first pivot, a torsion spring each side of that pivot to offload the motor, then a second arm once I saw it fit. It reached Division Finals at the World Championship and won the Innovate Award.

**Autonomous house-mapping robot** — [portfolio](https://randomfalcon124.github.io/#window-counter)
This robot explores a house with no operator and counts its windows, running an MPPI controller and visual SLAM on a Jetson Orin Nano with frontier-based exploration I wrote myself. It carries no lidar, so obstacles come from a monocular depth network classified against a fitted ground plane, and window detection is a consensus of three open-vocabulary detectors filtered by a vision-language model. It holds a commanded goal to within 7 cm and ships disarmed behind a 50 Hz fail-toward-stop safety governor.

**UAS-SAR at MIT Beaver Works** — [portfolio](https://randomfalcon124.github.io/#bwsi-sar)
Our track mounted a PulsON 440 radar to a DJI F550 to image obscured objects, flying the UAV to collect scans from many positions and synthesize a much larger aperture than the antenna itself, with the bonus that noise adds destructively across scans. I wrote the back projection: for each pixel, find the distance from the UAV to the point it represents, assign the radio wave intensity at that range, and sum across every scan. It resolved all four soda cans despite two much brighter retroreflectors in frame.

**Hardpoint Robotics, co-founder** *(no documentation available)*
I co-founded Hardpoint to build NDAA-compliant development UAVs, where I own airframe design: CAD, 3D printed CF-Nylon parts, and working with vendors on the carbon fiber structures. The new constraint is sourcing, since every component has to be compliant and actually purchasable, so vendor lead times shape the design as much as the loads do. No flight test footage yet and the CAD is closed, so this is the one project I can't show, though I'm glad to talk through the decisions.
