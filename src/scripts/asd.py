import os

def rename_files(directory_path):
    """
    Rename files in a directory.

    Args:
    - directory_path: Path to the directory containing files to be renamed.
    - new_file_names: A list of new names for the files. The number of elements in
                      this list should match the number of files in the directory.
    """
    # Get the list of files in the directory
    files = os.listdir(directory_path)
    
    # Iterate over files and rename them
    for i, file_name in enumerate(files):
        if "_" in file_name:
            old_path = os.path.join(directory_path, file_name)
            new_path = os.path.join(directory_path, file_name.split("_")[1])
        
            try:
                os.rename(old_path, new_path)
                print(f"File {file_name} renamed to {new_path}")
            except Exception as e:
                print(f"Error renaming file {file_name}: {e}")

# Example usage
directory_path = "."
rename_files(directory_path)
