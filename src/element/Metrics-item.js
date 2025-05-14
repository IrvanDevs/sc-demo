import React from "react";
import "./Metrics-item.css";
import { Eye, Bookmark, PlayCircle } from "react-feather";

function Metrics({ account, category, views, saved, videoId }) {
    return (
        <div className="Metrics-container">
            <div className="Video-container">
                <div className="Tiktok-wrapper">
                    <iframe
                        className="Tiktok-embed"
                        src={`https://www.tiktok.com/embed/${videoId}`}
                        scrolling="no"
                    ></iframe>
                </div>
            </div>

            <div className="Metrics-wrapper">
                <div className="Metrics-contentWrapper">
                    <div className="Metrics-title">
                        <p className="Account-title">{account}</p>
                        <span>|</span>
                        <p className="Category-title">{category}</p>
                    </div>

                    <div className="Metrics-content">
                        <div className="Count">
                            <Eye size={20} />
                            <p className="Metrics-number">{views}</p>
                        </div>

                        <div className="Count">
                            <Bookmark size={20} />
                            <p className="Metrics-number">{saved}</p>
                        </div>
                    </div>
                </div>

                <a href={`https://www.tiktok.com/@${account}/video/${videoId}`} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="PlayFull-video">
                    <PlayCircle size={20} />
                    <p>Play on TikTok</p>
                </a>
            </div>
        </div>
    );
}

export default Metrics;
