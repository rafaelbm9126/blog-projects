export default {
    title: "Create a LIFO stack in C++ in less than 50 lines",
    description:
        "Learn to implement a compact LIFO (Last In, First Out) stack in C++ with concise code",
    keywords: ["c++", "cpp", "compiler", "programming", "code", "computing", "execute", "linux", "windows", "mac", "stack", "lifo", "struct"],
    date: "2023-10-29",
    api_url: "https://api.github.com/repos/rafaelbm9126/binary-search-tree",
    repo_url: "https://gist.github.com/rafaelbm9126/59e31dd2c2bf5678a8d0534c9cf7c6e9",
    path: "cpp-simple-stack-lifo",
    code: [
        {
            language: "cpp",
            text: `
                typedef struct _List
                {
                    int data;
                    _List *next;
                } List;
            `,
        },
        {
            language: "cpp",
            text: `
                void create_node (List **node, int value)
                {
                    List * new_node = new List();
                    new_node->data = value;
                    new_node->next = NULL;
                
                    if (*node == NULL) {
                        *node = new_node;
                    } else {
                        new_node->next = *node;
                        *node = new_node;
                    }
                }
            `,
        },
        {
            language: "cpp",
            text: `
                int main(int argc, char const *argv[])
                {
                    List * list = NULL;
                
                    for (int x=0; x<10; x++) {
                        create_node(&list, x+10);
                    }
                
                    while (list != NULL) {
                        cout << list->data << endl;
                        list = list->next;
                    }
                
                    delete list;
                
                    return 0;
                }
            `,
        },
    ]
};
