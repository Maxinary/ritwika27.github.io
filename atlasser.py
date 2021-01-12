import os

import numpy as np
import pydub

padding = 500 # 500 ms break between audio
padding_audio = pydub.AudioSegment.silent(duration=padding)

'''
    Creates an atlas (concatenated file+map of name to location) from a list of
      audio files.
'''
def atlas(file_list):
    root_location = os.getcwd()
    locations = {}
    head = 0
    prior_file = ""

    audio = None

    for file in file_list:
        locations[file] = {"start":head}
        print(root_location+"/"+file, flush=True)
        print(" ")
        current_audio = pydub.AudioSegment.from_file(root_location+"/"+file, file[-3:])

        locations[file]["length"] = len(current_audio) / 1000
        head += locations[file]["length"]
        head += padding / 1000

        if audio == None:
            audio = pydub.AudioSegment.from_file(root_location+"/"+file, file[-3:]) # convert to copy later
        else:
            audio += current_audio

        audio += padding_audio

    return (audio, locations)

def find_audio_files():
    files = []
    for (dirpath, dirnames, filenames) in os.walk("."):
        files += [dirpath[2:]+("/" if len(dirpath) > 2 else "")+name for name in filenames] # remove the ./
    files = [file for file in files if file[-4:] in [".mp3", ".wav", ".m4a"] ]
    return files

'''
    Runs atlas on all .mp3 and .wav files in a single directory
'''
def atlas_directory(directory):
    prior_dir = os.getcwd()
    os.chdir(directory)

    (audio, locations) = atlas(find_audio_files())

    os.chdir(prior_dir)

    filename = "AUDIO_SHEET.mp3"
    audio.export(filename, format="mp3")

    for file in locations:
        locations[file]["start"] = round(locations[file]["start"], 3)
        locations[file]["length"] = round(locations[file]["length"], 3)

    descriptor = {"file":filename, "locations": locations}

    print(descriptor)

if __name__ == "__main__":
    try: 
        os.remove("AUDIO_SHEET.mp3")
    except:
        pass
    atlas_directory(".")
