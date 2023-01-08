import argparse
import os
from walkdir import filtered_walk

parser = argparse.ArgumentParser(description='Get the List Tree for a directory!')
parser.add_argument(dest='path', type=str, help="Root directory of the tree")
parser.add_argument('-d', '--maxDepth', dest='maxDepth', type=int, help="Max depth for tree expansion")
parser.add_argument('-od', '--onlyDirs', dest='onlyDirs', action='store_true', help="Want only directories to be listed")
parser.add_argument('-H', '--includeHidden', dest='includeHidden', action='store_true', help='Include hidden files')
parser.add_argument('-S', '--includeSystem', dest='includeSystem', action='store_true', help='Include system files')
system_file_names = [".DS_Store"]


def remove_trailing_slash(path_name):
    while path_name.endswith('/'):
        path_name = path_name[:-1]
    return path_name


def get_relative_depth(dir_path, level_offset):
    return dir_path.count(os.path.sep) - level_offset


def escape_illegal(name):
    illegal_char_array = ['\\', '&', '%', '$', '#', '_', '{', '}', '~', '^']
    for char in illegal_char_array:
        name = name.replace(char, "\\" + char)
    return name


rootDir = remove_trailing_slash(parser.parse_args().path)
includeHidden = parser.parse_args().includeHidden
includeSystem = parser.parse_args().includeSystem
maxDepth = parser.parse_args().maxDepth
onlyDirs = parser.parse_args().onlyDirs

if os.path.isdir(rootDir) and os.path.exists(rootDir):
    indentChar = " "
    levelOffset = rootDir.count(os.path.sep) - 1
    excluded_filter = []
    if not includeHidden:
        excluded_filter.append(".*")
    if not includeSystem:
        excluded_filter += system_file_names
    print("======  Directory Tree  ======")
    for dirName, subdirList, fileList in sorted(filtered_walk(rootDir, depth=maxDepth, excluded_dirs=excluded_filter,
                                                              excluded_files=excluded_filter)):
        level = get_relative_depth(dirName, levelOffset)
        baseName = os.path.basename(dirName)
        if level == 1:
            print(indentChar + "." + str(level) + " {" + escape_illegal(dirName) + "} ")
        else:
            print(indentChar * level + "." + str(level) + " {" + escape_illegal((os.path.basename(dirName))) + "} ")
        level += 1
        if not onlyDirs:
            for fileName in sorted(fileList):
                print(indentChar * level + "." + str(level) + " {" + escape_illegal(fileName) + "}")
else:
    print("Error: root directory not found at the provided path")
