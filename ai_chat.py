import streamlit as st
from google import genai
from google.genai import types

# --- PAGE STYLING ---
st.set_page_config(page_title="ChatGPT Clone", page_icon="💬", layout="centered")

st.title("💬 Real-Time AI Chat")
st.caption("A responsive, generative conversational companion powered by Gemini")
st.write("---")

# --- API ACCREDITATION SIDEBAR LOCK ---
if "api_key" not in st.session_state:
    st.session_state.api_key = ""

# Display the API key lock box in the sidebar
if not st.session_state.api_key:
    st.sidebar.warning("⚠️ Action Required")
    api_input = st.sidebar.text_input("Enter Gemini API Key:", type="password", help="Get a free key from Google AI Studio")
    if api_input:
        st.session_state.api_key = api_input
        st.rerun()
    st.stop()

# Initialize live GenAI client once the key is provided
client = genai.Client(api_key=st.session_state.api_key)

# --- RECURSIVE MESSAGE HISTORY ---
if "messages" not in st.session_state:
    st.session_state.messages = [
        {"role": "assistant", "content": "Hello! I am your real-time AI assistant. What are we building today?"}
    ]

# Render chat messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# --- CORE GENERATION DESK ---
if user_input := st.chat_input("Message AI Assistant..."):
    
    # Render user prompt immediately
    with st.chat_message("user"):
        st.markdown(user_input)
    st.session_state.messages.append({"role": "user", "content": user_input})
    
    # Map roles for structural API compliance
    formatted_api_contents = []
    for msg in st.session_state.messages:
        api_role = "user" if msg["role"] == "user" else "model"
        formatted_api_contents.append(
            types.Content(
                role=api_role,
                parts=[types.Part.from_text(text=msg["content"])]
            )
        )
    
    # Fetch real-time response from Google endpoints
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            try:
                response = client.models.generate_content(
                    model='gemini-2.5-flash',
                    contents=formatted_api_contents
                )
                model_reply = response.text
                st.markdown(model_reply)
                st.session_state.messages.append({"role": "assistant", "content": model_reply})
                
            except Exception as e:
                st.error(f"Network Connection Exception: {e}")