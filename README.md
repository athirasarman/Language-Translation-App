# Language-Translation-App
Program for Topcoder Practice
Overview
In this challenge. You are asked to build a simple app that is able to translate text from one language to another, by leveraging the Google Translation API.
You won’t need to request a Google Cloud API key, we will provide a sample HTTP REST API in the forum for your reference.
Challenge Requirement
The challenge is pretty simple. Build an app to translate text from one language to another. For example, you can write some text to describe how you are feeling about competing at Topcoder, your suggestions about Topcoder, your self-introduction etc, in either English or your native language, then translate it into any different language.
You can build a simple CLI app, a web app or a mobile app that translates the text into a different language. Your app needs to make a HTTP request (the HTTP request will be provided in the forum).  
And in the HTTP response, you will get the translated text. Below is an example. You can see it translates “Hallo” in German into “Hi” in English. 
{"sentences":[{"trans":"Hi","orig":"Hallo","backend":1}],"dict":[{"pos":"noun","terms":["halloo"],"entry":[{"word":"halloo","reverse_translation":["Hallo","Horrido","Halloruf"],"score":1.3212133E-5}],"base_form":"Hallo","pos_enum":1}],"src":"de","confidence":0.93561107,"spell":{},"ld_result":{"srclangs":["de"],"srclangs_confidences":[0.93561107],"extended_srclangs":["de"]}} 
You can change the parameter sl and tl in the HTTP request to change the source and target language of the translation. To view the supported language list, check https://cloud.google.com/translate/docs/languages
The app style and programming language are not limited, you can choose any that you are most familiar with.
Technology Stack
HTTP request
Programming Language: Up to you, no limitation

