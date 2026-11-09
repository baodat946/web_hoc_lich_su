import sys

def estimate_pages():
    try:
        with open('extracted_thesis.txt', 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        start_idx = 0
        for i, line in enumerate(lines):
            if "PHẦN 2: NỘI DUNG" in line or "TỔNG QUAN VỀ NỀN TẢNG LÝ THUYẾT" in line:
                start_idx = i
                break
                
        content_lines = [line.strip() for line in lines[start_idx:] if len(line.strip()) > 0]
        
        # Count words (only text, rough estimate)
        word_count = sum(len(line.split()) for line in content_lines)
        
        # Typical word count per A4 page in Vietnamese thesis is about 300 words
        pages_max = word_count / 300
        pages_min = word_count / 350
        
        with open('result.txt', 'w', encoding='utf-8') as out:
            out.write(f"Word count (from Chapter 2 onwards): {word_count}\n")
            out.write(f"Estimated pages: {pages_min:.1f} to {pages_max:.1f} pages\n")
            
    except Exception as e:
        with open('result.txt', 'w', encoding='utf-8') as out:
            out.write(f"Error: {str(e)}\n")

if __name__ == "__main__":
    estimate_pages()
