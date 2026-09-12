
class DSU {
    vector<int> parent, size;

public:
    DSU(int n) {
        parent.resize(n);
        size.resize(n, 1);
        iota(parent.begin(), parent.end(), 0);
    }

    int find(int n) {
        if (parent[n] == n) {
            return n;
        }
        return parent[n] = find(parent[n]);
    }

    bool unite(int a, int b) {
        a = find(a);
        b = find(b);

        if (a == b) {
            return true;
        }

        if (size[a] > size[b]) {
            parent[b] = a;
            size[a] += size[b];
        } else {
            parent[a] = b;
            size[b] += size[a];
        }
        return false;
    }

    bool similar(string& a, string& b) {
        int diff = 0;
        for (int i = 0; i < a.size(); i++) {
            if (a[i] != b[i]) {
                diff++;
                if (diff > 2) {
                    return false;
                }
            }
        }

        return diff == 0 || diff == 2;
    }
};

class Solution {

public:
    int numSimilarGroups(vector<string>& strs) {

        DSU dsu(strs.size());
        int group = strs.size();
        for (int i = 0; i < strs.size(); i++) {
            for (int j = i + 1; j < strs.size(); j++) {
                if (dsu.similar(strs[i], strs[j])) {
                    if (!dsu.unite(i, j)) {
                        group--;
                    }
                }
            }
        }

        return group;
    }
};