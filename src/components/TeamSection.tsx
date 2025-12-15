import { teams } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h3>Our Teams</h3>

      <ul>
        {teams.map(({ name, title }) => (
          <li key={name}>
            <h4>{name}</h4>
            <span>{title}</span>
          </li>
        ))}
      </ul>
      <Image
        src="/images/team-image.png"
        alt="Team Image"
        width={1000}
        height={1000}
      />
    </section>
  );
};

export default TeamSection;
