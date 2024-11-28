import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

function HomePage() {
  return (
    <div className="mx-10 my-20 p-6">
      <Title />
      <p className="mb-6 text-center text-lg">
        A modern web application for visualizing hierarchical data using the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Nested_set_model"
          className="text-blue-600"
          target="_blank"
        >
          Nested Set Model
        </a>
        .
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div>
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Key Features
          </h2>
          <ul className="mb-6 list-inside list-disc">
            <li>Interactive visualization of hierarchical data.</li>
            <li>Node selection with real-time data display.</li>
            <li>Efficient fetching and rendering of nested sets.</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Technologies Used
          </h2>
          <ul className="mb-6 list-inside list-disc">
            <li>
              <strong>React Framework:</strong> Used to create a dynamic and
              responsive user interface.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utility-first styling for clean and
              consistent design.
            </li>
            <li>
              <strong>Material UI:</strong> Beautiful tables for presenting
              nested set data.
            </li>
            <li>
              <strong>Styled Components:</strong> Enables custom and reusable
              styling.
            </li>
            <li>
              <strong>D3.JS:</strong> Visualizes hierarchical data with
              interactive charts.
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            How It Works
          </h2>
          <ol className="mb-6 list-inside list-decimal">
            <li>
              <strong>Fetch Data:</strong> The application retrieves data from a
              fictional API endpoint.
            </li>
            <li>
              <strong>Display Hierarchy:</strong> Data is rendered into a
              structured, user-friendly format.
            </li>
            <li>
              <strong>User Interaction:</strong> Clickable nodes reveal more
              details about the underlying data.
            </li>
            <li>
              <strong>Data Visualization:</strong> Insights are presented
              visually using rich charts.
            </li>
          </ol>
        </div>
      </div>

      <h2 className="mb-4 mt-8 text-center text-2xl font-semibold">
        Project Overview
      </h2>
      <p className="mb-6 text-lg">
        This project combines powerful libraries and frameworks to create a
        modern, interactive, and visually rich web application. Designed with
        both functionality and aesthetics in mind, it is a testament to
        efficient and scalable front-end development practices.
      </p>
      <p className="text-center text-lg text-blue-500">
        <Link to="/dashboard">
          Start exploring the hierarchical data now and enjoy seamless
          interaction and data visualization!
        </Link>
      </p>
    </div>
  );
}

export default HomePage;
