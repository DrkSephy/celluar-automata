class Simulation {
  constructor() {
    this.simualationRunning = false;
    this.simulationPaused = true;
  }

  runSimulation () {
    this.simualationRunning = true;
  }

  pauseSimulation() {
    this.simulationPaused = true;
  }

  resumeSimulation() {
    this.simulationPaused = false;
    this.simualationRunning = true;
  }

  togglePaused() {
    if (this.simualationRunning) {
      this.pauseSimulation();
    } else {
      this.resumeSimulation();
    }
  }
}

export default Simulation;