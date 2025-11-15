Gemini-TTS is the latest evolution of our Cloud TTS technology that moves beyond natural-sounding speech and provides granular control over generated audio using text-based prompts. Using Gemini-TTS, you can synthesize single or multi-speaker speech from short snippets to long-form narratives, precisely dictating style, accent, pace, tone, and even emotional expression, all steerable through natural-language prompts.

Available models
Gemini-TTS includes the following available models:

Gemini 2.5 Flash TTS
Gemini 2.5 Pro TTS
Model ID	gemini-2.5-flash-tts
Optimized for	Low latency, controllable, single- and multi-speaker Cloud TTS audio generation for cost-efficient everyday applications
Input and output modalities	
Input: Text
Output: Audio
Speaker number support	Single, multi-speaker
Supported output audio formats	
Unary: LINEAR16 (default), ALAW, MULAW, MP3, OGG_OPUS, PCM
Streaming: PCM (default), ALAW, MULAW, OGG_OPUS
Region support	global
Voice options	See Voice options
Available languages	See Available languages
Example	

model: "gemini-2.5-flash-tts"
prompt: "read slowly and pronounce the tones clearly"
text: "Availability and terms may vary.
       Check our website or your local store for complete
       details and restrictions."
speaker: "Kore"
            
Additional controls
Additional controls and capabilities include the following:

Natural conversation: Voice interactions of remarkable quality, more appropriate expressivity, and patterns of rhythm are delivered with very low latency so you can converse fluidly.

Style control: Using natural language prompts, you can adapt the delivery within the conversation by steering it to adopt specific accents and produce a range of tones and expressions including a whisper.

Dynamic performance: These models can bring text to life for expressive readings of poetry, newscasts, and engaging storytelling. They can also perform with specific emotions and produce accents when requested.

Enhanced pace and pronunciation control: Controlling delivery speed helps to ensure more accuracy in pronunciation including specific words.

For information on how to use these voices in your application, see Use Gemini-TTS.

Voice options
Gemini-TTS offers a wide range of voice options similar to our existing Chirp 3: HD Voices, each with distinct characteristics:

Select voice type
Name	Gende
Achernar	Female	
Achird	Male	
Algenib	Male	
Algieba	Male	
Alnilam	Male	
Aoede	Female	
Autonoe	Female	
Callirrhoe	Female	
Charon	Male	
Despina	Female	
Enceladus	Male	
Erinome	Female	
Fenrir	Male	
Gacrux	Female	
Iapetus	Male	
Kore	Female	
Laomedeia	Female	
Leda	Female	
Orus	Male	
Pulcherrima	Female	
Puck	Male	
Rasalgethi	Male	
Sadachbia	Male	
Sadaltager	Male	
Schedar	Male	
Sulafat	Female	
Umbriel	Male	
Vindemiatrix	Female	
Zephyr	Female	
Zubenelgenubi	Male	

Available languages
Gemini-TTS supports the following languages:

Select launch stage
Search by language or BCP-47 code
English (United States)	en-US	GA
Thai (Thailand)	th-TH	GA


Use Gemini-TTS
Discover how to use Gemini-TTS models to synthesize single-speaker speech.

Note: The size of the text field and the prompt field individually can be at most 4,000 bytes. While the total size of the prompt and text fields can be up to 8,000 bytes, each field must be a maximum of 4000 bytes. The output audio can at most be around 655 seconds. If the input text amounts to audio longer than this limit, the audio will be truncated.
Description	Limit	Type
Text field	Less than or equal to 4,000 bytes.	Input
Prompt field	Less than or equal to 4,000 bytes.	Input
Text and prompt fields	Less than or equal to 8,000 bytes.	Input
Duration for the output audio	Approximately 655 seconds. If the input text results in the audio exceeding 655 seconds, the audio is truncated.	Output
Note: To be able to use Gemini-TTS, aiplatform.endpoints.predict permission is required for the model endpoint. This permission can be granted with the roles/aiplatform.user role.
Before you begin
Before you can begin using Cloud Text-to-Speech, you must enable the API in the Google Cloud console by following steps:

Enable Cloud Text-to-Speech on a project.
Make sure billing is enabled for Cloud Text-to-Speech.
Set up authentication for your development environment.
Set up your Google Cloud project
Sign in to Google Cloud console

Go to the project selector page

You can either choose an existing project or create a new one. For more details about creating a project, see the Google Cloud documentation.

If you create a new project, a message appears informing you to link a billing account. If you are using a pre-existing project, make sure to enable billing

Learn how to confirm that billing is enabled for your project

Note: You must enable billing to use Cloud Text-to-Speech API, however, you won't be be charged unless you exceed the free quota. For more information about pricing, see the pricing page.
After you've selected a project and linked it to a billing account, you can enable the Cloud Text-to-Speech API. Go to the Search products and resources bar at the top of the page, and type in "speech". Select the Cloud Text-to-Speech API from the list of results.

To try Cloud Text-to-Speech without linking it to your project, choose the Try this API option. To enable the Cloud Text-to-Speech API for use with your project, click Enable.

Set up authentication for your development environment. For instructions, see Set up authentication for Cloud Text-to-Speech.

Perform synchronous single-speaker synthesis
Python
CURL


# google-cloud-texttospeech minimum version 2.29.0 is required.

import os
from google.cloud import texttospeech

PROJECT_ID = os.getenv("GOOGLE_CLOUD_PROJECT")

def synthesize(prompt: str, text: str, output_filepath: str = "output.mp3"):
    """Synthesizes speech from the input text and saves it to an MP3 file.

    Args:
        prompt: Styling instructions on how to synthesize the content in
          the text field.
        text: The text to synthesize.
        output_filepath: The path to save the generated audio file.
          Defaults to "output.mp3".
    """
    client = texttospeech.TextToSpeechClient()

    synthesis_input = texttospeech.SynthesisInput(text=text, prompt=prompt)

    # Select the voice you want to use.
    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US",
        name="Charon",  # Example voice, adjust as needed
        model_name="gemini-2.5-pro-tts"
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    # Perform the text-to-speech request on the text input with the selected
    # voice parameters and audio file type.
    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    # The response's audio_content is binary.
    with open(output_filepath, "wb") as out:
        out.write(response.audio_content)
        print(f"Audio content written to file: {output_filepath}")