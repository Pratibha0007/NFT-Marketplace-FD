import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
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
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <h1>Review & Submit</h1>
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
            <button id="save">Save as Draft</button>
            <button id="next" onClick={handleClickOpen}>
              Submit
            </button>
          </div>
        </div>
        <div className="ntfForm">
          <div className="buildingTitle">
            <p>White Apartment Building</p>
            <span>Proposal ID - PCOM - 13ADFR765</span>
          </div>
          <div className="riewe">
            <div>
              <h3>NFT DETAILS</h3>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>NFT Name</span>
                </div>
                <div>
                  <span>Sample NFT name</span>
                </div>
              </div>
              <div className="editBtn">
                <button>
                  <DriveFileRenameOutlineIcon />
                  Edit
                </button>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>NFT Type</span>
                </div>
                <div>
                  <span>Real estate</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>NFT Description</span>
                </div>
                <div>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                    <br />
                    industry. Lorem Ipsum has been the industry s standard dummy
                    <br />
                    text ever since the 1500s, when an unknown printer took a
                    galley
                    <br />
                    of type and scrambled it to make a type specimen book.
                  </span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Address</span>
                </div>
                <div>
                  <span>Suite 266 al, Lisowski 79601, Stąporków,</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Country</span>
                </div>
                <div>
                  <span>Ireland,</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>City</span>
                </div>
                <div>
                  <span>Dublin</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Pin Code</span>
                </div>
                <div>
                  <span>D24 KA47</span>
                </div>
              </div>
            </div>
          </div>
          <div className="riewe">
            <div>
              <h3>INVESTMENT DETAILS</h3>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Totla Property Value</span>
                </div>
                <div>
                  <span>Sampledata</span>
                </div>
              </div>
              <div className="editBtn">
                <button>
                  <DriveFileRenameOutlineIcon />
                  Edit
                </button>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Investment</span>
                </div>
                <div>
                  <span>Value</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Investment Stage</span>
                </div>
                <div>
                  <span>Details</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Total Investment</span>
                </div>
                <div>
                  <span>Sample data</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Minimum Investment Value</span>
                </div>
                <div>
                  <span>Sample data</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Expected ROI</span>
                </div>
                <div>
                  <span>Sample data</span>
                </div>
              </div>
            </div>
            <div className="nftName">
              <div className="riewDetails">
                <div id="riewResult">
                  <span>Pin Code</span>
                </div>
                <div>
                  <span>D24 KA47</span>
                </div>
              </div>
            </div>
          </div>
          <div className="riewSummary">
            <span>Include other details in the similar format</span>
            <span>Legal structure</span>
            <span>Taxation</span>
            <span>NFT details</span>
            <span>list of participants</span>
            <span> list of documents</span>
            <span>relevant images everything</span>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <TaskAltIcon id="done" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h2>Proposal Submitted Successfully!</h2>
            <p>
              Your proposal has been submitted successfully,
              <br /> you can view the proposal status here
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <p id="proposal">PROPOSAL ID: PCOM-D123456-00</p>
          <span id="ref">
            Blockchain Transaction ref: X098213221S9FS0D983DAOI
          </span>
          <button onClick={handleClose} id="submitBtnPop">
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NtfHome;
