```sql

-- Enable RLS on the practice table
ALTER TABLE practice ENABLE ROW LEVEL SECURITY;

-- Policy for selecting own records
CREATE POLICY "Users can view own practice records" ON practice
FOR SELECT TO authenticated
USING ((SELECT auth.uid()) = user_id);

-- Policy for inserting own records
CREATE POLICY "Users can insert own practice records" ON practice
FOR INSERT TO authenticated
WITH CHECK ((SELECT auth.uid()) = user_id);

-- Policy for updating own records
CREATE POLICY "Users can update own practice records" ON practice
FOR UPDATE TO authenticated
USING ((SELECT auth.uid()) = user_id)
WITH CHECK ((SELECT auth.uid()) = user_id);

-- Policy for deleting own records
CREATE POLICY "Users can delete own practice records" ON practice
FOR DELETE TO authenticated
USING ((SELECT auth.uid()) = user_id);
```
