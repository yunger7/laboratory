import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

export default function Notes() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/notes")
			.then(res => res.json())
			.then(data => setNotes(data));
	}, []);

	return (
		<Container>
      {/* <Grid container>
        <Grid item md={3} sm={6} xs={12}>
          <Paper>1</Paper>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Paper>2</Paper>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Paper>3</Paper>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Paper>3</Paper>
        </Grid>
      </Grid> */}

      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
		</Container>
	);
}
