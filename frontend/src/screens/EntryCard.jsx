// import { useState, useEffect } from "react"
// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import { Container, Card, CardGroup } from "react-bootstrap"
// import axios from "axios"
// import {
// 	useFetchNotesQuery,
// 	useCreateNoteMutation,
// 	useDeleteNoteMutation,
// } from "../slices/notesApiSlice.js"

// const EntryCard = ({ userId }) => {
// 	// const handleSuccessfulLogin = (userId) => {
// 	// 	setUserId(userId)
// 	// }
// 	const [notes, setNotes] = useState([])
// 	// const [userId, setUserId] = useState()
// 	const [newNote, setNewNote] = useState({ title: "", body: "" })

// 	// useEffect(() => {
// 	// 	const fetchNotes = async () => {
// 	// 		try {
// 	// 			const response = await axios.get(
// 	// 				`http://localhost:5000/notes/user/${userId}`
// 	// 			)
// 	// 			if (response.data.userId) {
// 	// 				const extractedUserId = response.data.userId
// 	// 				console.log("Extracted userId:", extractedUserId)
// 	// 				setUserId(extractedUserId)
// 	// 			} else {
// 	// 				console.log("userId not found in response.")
// 	// 			}

// 	// 			setNotes(response.data)
// 	// 			console.log(response.data, "kjfsjf")
// 	// 		} catch (error) {
// 	// 			console.log(error)
// 	// 		}
// 	// 	}
// 	// 	fetchNotes()
// 	// }, [userId])
// 	useEffect(() => {
// 		const fetchNotes = async () => {
// 			try {
// 				if (!userId) {
// 					console.log("UserId is undefined. Cannot fetch notes.")
// 					return
// 				}

// 				const response = await axios.get(
// 					`http://localhost:5000/notes/user/${userId}`
// 				)

// 				if (response.data.userId) {
// 					const extractedUserId = response.data.userId
// 					console.log("Extracted userId:", extractedUserId)
// 					setUserId(extractedUserId)
// 				} else {
// 					console.log("userId not found in response.")
// 				}

// 				setNotes(response.data)
// 				console.log(response.data, "kjfsjf")
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		}
// 		fetchNotes()
// 	}, [userId])

// 	const handleDeleteNote = async (userId, noteId) => {
// 		console.log("Attempting to delete note...")
// 		console.log("UserID:", userId)
// 		console.log("Note ID:", noteId)
// 		console.log("Deleting note with ID:", noteId)
// 		try {
// 			console.log("Sending DELETE request...")
// 			await axios.delete(`http://localhost:5000/notes/user/${userId}/${noteId}`)
// 			console.log("DELETE request successful.")

// 			setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId))
// 			console.log("Note removed from state.")
// 		} catch (error) {
// 			console.log("Error deleting note:", error)
// 		}
// 	}
// 	const handleNoteSubmit = async () => {
// 		try {
// 			console.log("Sending POST request to add note...")
// 			const response = await axios.post("http://localhost:5000/notes", {
// 				title: newNote.title,
// 				body: newNote.body,
// 				user: userId,
// 			})
// 			console.log("POST request successful.")
// 			console.log("New note added:", response.data)

// 			setNotes([...notes, response.data])
// 			setNewNote({ title: "", body: "" })
// 		} catch (error) {
// 			console.log("Error adding note:", error)
// 		}
// 	}
// 	return (
// 		<Container>
// 			<h2> | Create a Note</h2>
// 			<Form>
// 				<Form.Group className='mb-3' controlId='formBasicTitle'>
// 					<Form.Label>Title</Form.Label>
// 					<Form.Control
// 						type='text'
// 						placeholder='Enter Title'
// 						value={newNote.title}
// 						onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
// 					/>
// 				</Form.Group>

// 				<Form.Group className='mb-3' controlId='formBasicBody'>
// 					<Form.Label>Body</Form.Label>
// 					<Form.Control
// 						type='text'
// 						placeholder='Enter Note'
// 						value={newNote.body}
// 						onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
// 					/>
// 				</Form.Group>
// 				<Form.Text className='text-muted'>
// 					Use the form above to create a post. Make sure you fill the required
// 					title and body fields and then press submit
// 				</Form.Text>
// 				<div>
// 					<Button variant='primary' type='submit' onClick={handleNoteSubmit}>
// 						Submit
// 					</Button>
// 				</div>
// 			</Form>
// 			<h2>My notes</h2>

// 			<CardGroup>
// 				{notes.map((note) => (
// 					<Card key={note._id} className='card-with-margin'>
// 						<Card.Body>
// 							<Card.Title as='h3'>{note.title}</Card.Title>
// 							<Card.Text as='p'>{note.body}</Card.Text>
// 							<Button variant='primary' style={{ marginRight: "4px" }}>
// 								Edit
// 							</Button>
// 							<Button
// 								variant='danger'
// 								onClick={() => handleDeleteNote(userId, note._id)}
// 							>
// 								Delete
// 							</Button>
// 						</Card.Body>
// 					</Card>
// 				))}
// 			</CardGroup>
// 		</Container>
// 	)
// }

// export default EntryCard

import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Container } from "react-bootstrap"
import {
	useFetchNotesQuery,
	useCreateNoteMutation,
	useDeleteNoteMutation,
} from "../slices/notesApiSlice.js"

const EntryCard = ({ userId }) => {
	const { data: notes, isLoading } = useFetchNotesQuery()
	const [createNote] = useCreateNoteMutation()
	const [deleteNote] = useDeleteNoteMutation()

	const [newNote, setNewNote] = useState({ title: "", body: "" })

	const handleDeleteNote = async (userId, noteId) => {
		console.log("Attempting to delete note...")
		console.log("UserID:", userId)
		console.log("Note ID:", noteId)
		console.log("Deleting note with ID:", noteId)
		try {
			console.log("Sending DELETE request...")
			await deleteNote({
				userId: userId,
				noteId: noteId,
			})
			console.log("DELETE request successful.")

			console.log("Note removed from state.")
		} catch (error) {
			console.log("Error deleting note:", error)
		}
	}

	const handleNoteSubmit = async () => {
		try {
			console.log("Sending POST request to add note...")
			const response = await createNote({
				title: newNote.title,
				body: newNote.body,
				user: userId,
			})
			console.log("POST request successful.")
			console.log("New note added:", response.data)

			setNewNote({ title: "", body: "" })
		} catch (error) {
			console.log("Error adding note:", error)
		}
	}

	return (
		<Container>
			<h2>Create a Note</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicTitle'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Title'
						value={newNote.title}
						onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicBody'>
					<Form.Label>Body</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Note'
						value={newNote.body}
						onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
					/>
				</Form.Group>
				<Form.Text className='text-muted'>
					Use the form above to create a post. Make sure you fill the required
					title and body fields and then press submit
				</Form.Text>
				<div>
					<Button variant='primary' type='submit' onClick={handleNoteSubmit}>
						Submit
					</Button>
				</div>
			</Form>
			<h2>My notes</h2>
			{/* <CardGroup>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					notes.map((note) => (
						<Card key={note._id} className='card-with-margin'>
							<Card.Body>
								<Card.Title as='h3'>{note.title}</Card.Title>
								<Card.Text as='p'>{note.body}</Card.Text>
								<Button variant='primary' style={{ marginRight: "4px" }}>
									Edit
								</Button>
								<Button
									variant='danger'
									onClick={() => handleDeleteNote(userId, note._id)}
								>
									Delete
								</Button>
							</Card.Body>
						</Card>
					))
				)}
			</CardGroup> */}
		</Container>
	)
}

export default EntryCard
