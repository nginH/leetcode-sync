class Solution {

    void dfs(vector<vector<int>>& isConnected, int b, vector<bool>& vis) {
        vis[b] = 1;
        for (int i = 0; i < isConnected.size(); i++) {
            if (isConnected[b][i] == 1 && vis[i]!=1) {
                dfs(isConnected, i, vis);
            }
        }
    }

public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        vector<bool> vis(isConnected.size() + 1, false);
        int ans = 0;
        for (int i = 0; i < isConnected.size(); i++) {
            if (!vis[i]) {
                ans++;
                dfs(isConnected, i, vis);
            }
        }
        return ans;
    }
};