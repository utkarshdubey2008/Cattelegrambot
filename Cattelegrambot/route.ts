import { NextResponse } from "next/server"
import { books } from "../../data/books"

export async function POST(request: Request) {
  try {
    const { bookId } = await request.json()

    const book = books.find((b) => b.id === bookId)
    if (!book) {
      return NextResponse.json({ error: "Invalid book ID" }, { status: 400 })
    }

    // Here you would typically process the order
    // For now, we'll just return a success response

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or contact support." },
      { status: 500 },
    )
  }
}

