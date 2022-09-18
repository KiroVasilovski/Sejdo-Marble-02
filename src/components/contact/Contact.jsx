import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "../Button";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
    const formId = "a0yqRTry";
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = "6LdckGAgAAAAAI0IlEpf25k9BOJ1ThomuhKcSWUM";
    const recaptchaRef = useRef();

    const initialFormState = {
        Name: "",
        Country: "",
        Email: "",
        Phone_Number: "",
        Message: "",
        Checkbox: "Agreed on Privacy Policy",
    };

    const [formState, setFormState] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [messageWarn, setMessageWarn] = useState();
    const [recaptchaToken, setReCaptchaToken] = useState();
    const [textColor, setTextColor] = useState("");

    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken,
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessageWarn({
                class: "bg-green-500",
                text: "Your message was sent!",
            });
            setTextColor("green");
            setFormState(initialFormState);
            recaptchaRef.current.reset();
        } catch (error) {
            console.log(error);
            setMessageWarn({
                class: "bg-red-500",
                text: "A problem occured. Please try again.",
            });
            setTextColor("red");
        }
    };

    const updateFormControl = (event) => {
        const { id, value } = event.target;
        const key = id;
        const updatedFormState = { ...formState };
        updatedFormState[key] = value;
        setFormState(updatedFormState);
    };

    const updateRecaptchaToken = (token) => {
        setReCaptchaToken(token);
    };

    return (
        <>
            <div className="whole-container">
                <div className="whole-container-down">
                    <div className="contact-container">
                        <form className="form-container" onSubmit={submitForm}>
                            <div className="contactForm">
                                <Typography variant="h3">Contact us</Typography>
                                <TextField
                                    id="Name"
                                    label="Name"
                                    variant="outlined"
                                    required
                                    onChange={updateFormControl}
                                    value={formState?.Name}
                                />
                                <TextField
                                    id="Country"
                                    label="Country"
                                    variant="outlined"
                                    required
                                    onChange={updateFormControl}
                                    value={formState?.Country}
                                />
                                <TextField
                                    id="Email"
                                    label="E-Mail"
                                    variant="outlined"
                                    required
                                    onChange={updateFormControl}
                                    value={formState?.Email}
                                    inputProps={{
                                        inputMode: "email",
                                        pattern:
                                            "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
                                    }}
                                />
                                <TextField
                                    id="Phone_Number"
                                    label="Phone number"
                                    variant="outlined"
                                    required
                                    onChange={updateFormControl}
                                    value={formState?.Phone_Number}
                                    inputProps={{
                                        inputMode: "numeric",
                                        pattern: "[0-9]*",
                                    }}
                                />
                                <TextField
                                    id="Message"
                                    label="Message"
                                    variant="outlined"
                                    required
                                    onChange={updateFormControl}
                                    value={formState?.Message}
                                    multiline
                                    rows={5}
                                    maxRows={10}
                                />
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        id="Checkbox"
                                        name="privacy"
                                        required
                                        className="checkbox-input"
                                        value={formState?.Checkbox}
                                    />
                                    <label for="privacy">
                                        I have read and agree to the{" "}
                                        <Link
                                            to="/privacy"
                                            className="privacy-policy-contact"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </label>
                                </div>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={recaptchaKey}
                                    onChange={updateRecaptchaToken}
                                />

                                <Typography
                                    variant="h6"
                                    align="center"
                                    fullwidth="true"
                                    style={{ color: textColor }}
                                >
                                    {messageWarn && (
                                        <div>{messageWarn.text}</div>
                                    )}
                                </Typography>
                                <Button
                                    buttonStyle="btn--outline"
                                    buttonSize="btn--large"
                                    disabled={submitting}
                                >
                                    {submitting ? "Submitting..." : "Submit"}
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="info-container">
                        <div>
                            <Typography variant="h4" sx={{ mb: 3 }}>
                                Contact Information
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={"bold"}
                                >
                                    Office:
                                </Typography>
                                <Typography variant="p">
                                    Mermer Sejdo - SH3 Bitinckë, Bilisht, 7008
                                    Albania
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={"bold"}
                                >
                                    Working Hours:
                                </Typography>
                                <Typography variant="p">
                                    8:00 - 16:30, Monday to Saturday
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={"bold"}
                                >
                                    Contact:
                                </Typography>
                                <Typography variant="p">
                                    <a
                                        href="tel:+355 67 20 22 022"
                                        className="telephone"
                                    >
                                        +355 67 20 22 022
                                    </a>
                                </Typography>
                                <br />
                                <Typography variant="p">
                                    <a
                                        href="tel:++355 67 20 22 020"
                                        className="telephone"
                                    >
                                        +355 67 20 22 020
                                    </a>
                                </Typography>
                                <br />
                                <Typography variant="p">
                                    <a
                                        href="tel:+49 176 363 38 158"
                                        className="telephone"
                                    >
                                        +49 176 363 38 158
                                    </a>
                                </Typography>
                                <br />
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={"bold"}
                                    sx={{ mt: 3 }}
                                >
                                    E-Mail:
                                </Typography>
                                <Typography variant="p">
                                    info@sejdomarble.com
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5580836534364!2d20.969068314661587!3d40.63962674997822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350a90ebfb2908f%3A0xa4cc867c05b4f5ad!2sSejdo%20SHPK!5e0!3m2!1sen!2sde!4v1663442020634!5m2!1sen!2sde"
                    className="google-maps"
                    id="gmap_canvas"
                    style={{ width: "100%", height: "300px" }}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                ></iframe>
            </div>
            <Container>
                <Box sx={{ mt: 4, mb: 3 }}>
                    <Typography
                        variant="h4"
                        display="flex"
                        justifyContent="center"
                    >
                        Our Team
                    </Typography>
                    <br />
                    <Box>
                        <Stack
                            direction={{
                                xs: "column",
                                sm: "column",
                                md: "row",
                            }}
                            alignItems="center"
                        >
                            <Box
                                sx={{
                                    width: 1 / 3,
                                    pr: 8,
                                    ml: 2,
                                }}
                            >
                                <div className="photo-container"></div>
                                <div className="photo-container-text">
                                    <h4>Orion Sejdo</h4>
                                    <p>Orion@sejdomarble.com</p>
                                    <p>
                                        <a
                                            href="tel:+355 67 20 22 020"
                                            className="telephone"
                                        >
                                            +355 67 20 22 020
                                        </a>
                                    </p>
                                </div>
                            </Box>
                            <Box
                                sx={{
                                    width: 1 / 3,
                                    pr: 8,
                                }}
                            >
                                <div className="photo-container-2"> </div>
                                <div className="photo-container-text">
                                    <h4>Orelsi Sejdo</h4>
                                    <p>Orelsi@sejdomarble.com</p>
                                    <p>
                                        <a
                                            href="tel:+49 176 363 38 158"
                                            className="telephone"
                                        >
                                            +49 176 363 38 158
                                        </a>
                                    </p>
                                </div>
                            </Box>
                            <Box
                                sx={{
                                    width: 1 / 3,
                                    mr: 2,
                                }}
                            >
                                <div className="photo-container-3"> </div>
                                <div className="photo-container-text">
                                    <h4>Arti Sejdo</h4>
                                    <p>Arti@sejdomarble.com</p>
                                    <p>
                                        <a
                                            href="tel:+355 67 20 22 022"
                                            className="telephone"
                                        >
                                            +355 67 20 22 022
                                        </a>
                                    </p>
                                </div>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
