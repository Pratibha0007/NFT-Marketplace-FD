import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
const steps = [
  {
    label: "NFT details",
    description: `Sub-text related to NFT.`,
  },
  {
    label: "Investment details",
    description: "Sub-text related to investment.",
  },
  {
    label: "Legal structure",
    description: `About legal structure.`,
  },
  {
    label: "Taxation",
    description: `Sub-text related to taxation.`,
  },
  {
    label: "NFT details",
    description: `About NFT details.`,
  },
  {
    label: "Select Participants",
    description: `Related text .`,
  },
  {
    label: "Review & Submit",
    description: `Related text .`,
  },
];
function NtfHome() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="ntfHome">
      <div className="ntfSideBAr">
        {" "}
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  <p>{step.label}</p>

                  {step.description}
                </StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    {/*  <div>
                     <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                </Button>
                    </div>*/}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
      <div className="ntfHomecontainer">
        <div className="ntfHeader">
          <div className="ntfTitle">
            <h1>NFT details</h1>
            <span>
              Please provide detailed information about the NFT(s) you wish to
              NFTize
            </span>
          </div>
          <div className="ntfBtn">
            <button id="back">
              <KeyboardBackspaceIcon />
              Back
            </button>
            <Link to="/review">
              <button id="next">
                Next
                <EastIcon />
              </button>
            </Link>
          </div>
        </div>
        <div className="ntfForm">
          <form>
            <div className="filedContainer">
              <div>
                <h2>NFT Name</h2>
                <span>a new line and may extend beyond one line.</span>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="filedContainer">
              <div>
                <h2>NFT Price</h2>
                <span>Lorem Ipsum is simply dummy text</span>
              </div>
              <input type="text" placeholder="$ 2000.00" />
            </div>
            <div className="filedContainer thirdField">
              <div>
                <h2>NFT Description</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="Placeholder" />
            </div>
            <div className="filedContainer">
              <div>
                <h2>Initial Supply</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="50,000,000" />
            </div>
            <div className="filedContainer">
              <div>
                <h2>Listing Date</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="13/01/2024" />
            </div>
            <div className="filedContainer sixt">
              <div>
                <h2>Expiry Date</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="14/12/2024" />
            </div>
            <div className="filedContainer">
              <div>
                <h2>Min Dividend Pay</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="$ 12312" />
            </div>
            <div className="filedContainer">
              <div>
                <h2>Max Dividend Pay</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="$ 23432" />
            </div>
            <div className="filedContainer">
              <div>
                <h2>Last Offer Time</h2>
                <span>A block of help text that breaks onto a new.</span>
              </div>
              <input type="text" placeholder="12/05/2024" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NtfHome;
