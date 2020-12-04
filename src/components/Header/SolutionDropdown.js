import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import { useSolutionEdges } from "../../hooks/use-solution-edges";
import IndividualCTADropdown from "./IndividualCTADropdown";

function SolutionDropdown({ config }) {
  const solutionEdges = useSolutionEdges();
  return (
    <Grid container className="dropdown-content">
      <Grid md={7} item>
        <h2 className="mb-0 ">Industry solutions</h2>
        <Grid container>
          {solutionEdges.map((solution, index) => (
            <Grid item key={index} md={4} sm={6} xs={12} xs={12}>
              <a style={{ marginTop: 0 }} href={solution.node.fields.slug}>
                <p
                  style={{
                    fontSize: "0.95em",
                    paddingTop: 0,
                    margin: 0,
                    paddingBottom: 0,
                    fontWeight: "700",
                  }}
                >
                  {solution.node.frontmatter.title}
                </p>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={5}>
        <IndividualCTADropdown />
      </Grid>
    </Grid>
  );
}

export default SolutionDropdown;
