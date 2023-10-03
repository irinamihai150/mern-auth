import { apiSlice } from "./apiSlice"

const NOTES_URL = "/api/notes"

export const notesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchNotes: builder.query({
			query: () => ({
				url: NOTES_URL,
				method: "GET",
			}),
		}),
		createNote: builder.mutation({
			query: (noteData) => ({
				url: NOTES_URL,
				method: "POST",
				body: noteData,
			}),
		}),
		deleteNote: builder.mutation({
			query: (noteId) => ({
				url: `${NOTES_URL}/${noteId}`,
				method: "DELETE",
			}),
		}),
	}),
})

export const {
	useFetchNotesQuery,
	useCreateNoteMutation,
	useDeleteNoteMutation,
} = notesApiSlice
