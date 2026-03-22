import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor: theme.primary400,
            boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
        },
        iconBtn: {
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            backgroundColor: 'transparent',
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.primary,
                border: `2px solid ${theme.tertiary}`,
                boxShadow: `0 0 10px ${theme.tertiary}55`,
            },
        },
        icon: {
            fontSize: '0.9rem',
        },
    }));

    const classes = useStyles();

    const slug = name.replace(/ /g, '-').toLowerCase();

    return (
        <Fade bottom>
            <div
                key={id}
                className={`singleProject ${classes.card}`}
                style={{ backgroundColor: theme.primary400 }}
            >
                {/* ── Image + hover overlay ── */}
                <div className="projectImageWrapper">
                    <img src={image ? image : placeholder} alt={name} />
                    <div className="projectOverlay">
                        <p className="project--desc">{desc}</p>
                        <div className="project--lang">
                            {tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Footer: title + buttons ── */}
                <div className="projectContent">
                    <h2
                        id={slug}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <div className="project--showcaseBtn">
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.iconBtn}
                            aria-labelledby={`${slug} ${slug}-demo`}
                        >
                            <FaPlay
                                id={`${slug}-demo`}
                                className={classes.icon}
                                aria-label="Demo"
                            />
                        </a>
                        <a
                            href={code}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.iconBtn}
                            aria-labelledby={`${slug} ${slug}-code`}
                        >
                            <FaCode
                                id={`${slug}-code`}
                                className={classes.icon}
                                aria-label="Code"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
