# Obscure Test

- Eager Test: The test verifies too much functionality in a single Test Method.

- Mystery Guest: The test reader is not able to see the cause and effect between fixture and verification logic because part of it is done outside the Test Method.

- General Fixture: The test builds or references a larger fixture than is needed to verify the functionality in question.

- Irrelevant Information: The test exposes a lot of irrelevant details about the fixture that distract the test reader from what really affects the behavior of the SUT.

- Hard-Coded Test Data: Data values in the fixture, assertions, or arguments of the SUT are hard-coded in the Test Method, obscuring cause–effect relationships between inputs and expected outputs.

- Indirect Testing: The Test Method interacts with the SUT indirectly via another object, thereby making the interactions more complex.

# Conditional Test Logic

- Flexible Test

- Conditional Verification Logic

- Production Logic in Test

- Complex Teardown

- Multiple Test Conditions

# Hard-to-Test Code

- Highly Coupled Code

- Asynchronous Code

- Untestable Test Code

# Test Code Duplication

- Cut-and-Paste Code Reuse

- Reinventing the Wheel

# Test Logic in Production

- Test Hook

- For Tests Only

- Test Dependency in Production

- Equality Pollution
